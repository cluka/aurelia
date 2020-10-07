var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* eslint-disable @typescript-eslint/promise-function-async */
import { DI, IServiceLocator, Registration, } from '@aurelia/kernel';
export const LifecycleTask = {
    done: {
        done: true,
        wait() { return Promise.resolve(); }
    }
};
export var TaskSlot;
(function (TaskSlot) {
    TaskSlot[TaskSlot["beforeCreate"] = 0] = "beforeCreate";
    TaskSlot[TaskSlot["beforeCompile"] = 1] = "beforeCompile";
    TaskSlot[TaskSlot["beforeCompileChildren"] = 2] = "beforeCompileChildren";
    TaskSlot[TaskSlot["beforeActivate"] = 3] = "beforeActivate";
    TaskSlot[TaskSlot["afterActivate"] = 4] = "afterActivate";
    TaskSlot[TaskSlot["beforeDeactivate"] = 5] = "beforeDeactivate";
    TaskSlot[TaskSlot["afterDeactivate"] = 6] = "afterDeactivate";
})(TaskSlot || (TaskSlot = {}));
export const IStartTask = DI.createInterface('IStartTask').noDefault();
var TaskType;
(function (TaskType) {
    TaskType[TaskType["with"] = 0] = "with";
    TaskType[TaskType["from"] = 1] = "from";
})(TaskType || (TaskType = {}));
export const AppTask = class $AppTask {
    constructor(type) {
        this.type = type;
        this._slot = void 0;
        this._promiseOrTask = void 0;
        this._container = void 0;
        this._key = void 0;
        this._callback = void 0;
        this._task = void 0;
    }
    get slot() {
        if (this._slot === void 0) {
            throw new Error('AppTask.slot is not set');
        }
        return this._slot;
    }
    get promiseOrTask() {
        if (this._promiseOrTask === void 0) {
            throw new Error('AppTask.promiseOrTask is not set');
        }
        return this._promiseOrTask;
    }
    get container() {
        if (this._container === void 0) {
            throw new Error('AppTask.container is not set');
        }
        return this._container;
    }
    get key() {
        if (this._key === void 0) {
            throw new Error('AppTask.key is not set');
        }
        return this._key;
    }
    get callback() {
        if (this._callback === void 0) {
            throw new Error('AppTask.callback is not set');
        }
        return this._callback;
    }
    get task() {
        if (this._task === void 0) {
            throw new Error('AppTask.task is not set');
        }
        return this._task;
    }
    static with(key) {
        const task = new $AppTask(0 /* with */);
        task._key = key;
        return task;
    }
    static from(promiseOrTask) {
        const task = new $AppTask(1 /* from */);
        task._promiseOrTask = promiseOrTask;
        return task;
    }
    beforeCreate() {
        return this.at(0 /* beforeCreate */);
    }
    beforeCompile() {
        return this.at(1 /* beforeCompile */);
    }
    beforeCompileChildren() {
        return this.at(2 /* beforeCompileChildren */);
    }
    beforeActivate() {
        return this.at(3 /* beforeActivate */);
    }
    afterActivate() {
        return this.at(4 /* afterActivate */);
    }
    beforeDeactivate() {
        return this.at(5 /* beforeDeactivate */);
    }
    afterDeactivate() {
        return this.at(6 /* afterDeactivate */);
    }
    at(slot) {
        this._slot = slot;
        return this;
    }
    call(fn) {
        this._callback = fn;
        return this;
    }
    register(container) {
        return this._container = container.register(Registration.instance(IStartTask, this));
    }
    resolveTask() {
        if (this._task === void 0) {
            switch (this.type) {
                case 0 /* with */:
                    this._task = new ProviderTask(this.container, this.key, this.callback);
                    break;
                case 1 /* from */:
                    this._task = new TerminalTask(this.promiseOrTask);
                    break;
            }
        }
        return this.task;
    }
};
export const IStartTaskManager = DI.createInterface('IStartTaskManager').noDefault();
let StartTaskManager = class StartTaskManager {
    constructor(locator) {
        this.locator = locator;
        this.beforeCompileChildrenQueued = false;
    }
    static register(container) {
        return Registration.singleton(IStartTaskManager, this).register(container);
    }
    enqueueBeforeCompileChildren() {
        if (this.beforeCompileChildrenQueued) {
            throw new Error(`BeforeCompileChildren already queued`);
        }
        this.beforeCompileChildrenQueued = true;
    }
    runBeforeCreate(locator = this.locator) {
        return this.run(0 /* beforeCreate */, locator);
    }
    runBeforeCompile(locator = this.locator) {
        return this.run(1 /* beforeCompile */, locator);
    }
    runBeforeCompileChildren(locator = this.locator) {
        if (this.beforeCompileChildrenQueued) {
            this.beforeCompileChildrenQueued = false;
            return this.run(2 /* beforeCompileChildren */, locator);
        }
        return LifecycleTask.done;
    }
    runBeforeActivate(locator = this.locator) {
        return this.run(3 /* beforeActivate */, locator);
    }
    runAfterActivate(locator = this.locator) {
        return this.run(4 /* afterActivate */, locator);
    }
    runBeforeDeactivate(locator = this.locator) {
        return this.run(5 /* beforeDeactivate */, locator);
    }
    runAfterDeactivate(locator = this.locator) {
        return this.run(6 /* afterDeactivate */, locator);
    }
    run(slot, locator = this.locator) {
        const tasks = locator.getAll(IStartTask)
            .filter(startTask => startTask.slot === slot)
            .map(startTask => startTask.resolveTask())
            .filter(task => !task.done);
        if (tasks.length === 0) {
            return LifecycleTask.done;
        }
        return new AggregateTerminalTask(tasks);
    }
};
StartTaskManager = __decorate([
    __param(0, IServiceLocator),
    __metadata("design:paramtypes", [Object])
], StartTaskManager);
export { StartTaskManager };
export class PromiseTask {
    constructor(promise, next, context, ...args) {
        this.done = false;
        this.promise = promise.then(value => {
            if (next !== null) {
                const nextResult = next.call(context, value, ...args);
                if (nextResult === void 0) {
                    this.done = true;
                }
                else {
                    const nextPromise = nextResult.then instanceof Function
                        ? nextResult
                        : nextResult.wait();
                    return nextPromise.then(() => {
                        this.done = true;
                    });
                }
            }
        });
    }
    wait() {
        return this.promise;
    }
}
export class ProviderTask {
    constructor(container, key, callback) {
        this.container = container;
        this.key = key;
        this.callback = callback;
        this.done = false;
    }
    wait() {
        if (this.promise === void 0) {
            const instance = this.container.get(this.key);
            const maybePromiseOrTask = this.callback.call(void 0, instance);
            this.promise = maybePromiseOrTask === void 0
                ? Promise.resolve()
                : maybePromiseOrTask.then instanceof Function
                    ? maybePromiseOrTask
                    : maybePromiseOrTask.wait();
            this.promise = this.promise.then(() => {
                this.done = true;
                this.container = (void 0);
                this.key = (void 0);
                this.callback = (void 0);
            }).catch(e => { throw e; });
        }
        return this.promise;
    }
}
export class ContinuationTask {
    constructor(antecedent, next, context, ...args) {
        this.done = false;
        const promise = antecedent.then instanceof Function
            ? antecedent
            : antecedent.wait();
        this.promise = promise.then(() => {
            const nextResult = next.call(context, ...args);
            if (nextResult === void 0) {
                this.done = true;
            }
            else {
                const nextPromise = nextResult.then instanceof Function
                    ? nextResult
                    : nextResult.wait();
                return nextPromise.then(() => {
                    this.done = true;
                });
            }
        });
    }
    wait() {
        return this.promise;
    }
}
export class TerminalTask {
    constructor(antecedent) {
        this.done = false;
        this.promise = antecedent.then instanceof Function
            ? antecedent
            : antecedent.wait();
        this.promise.then(() => {
            this.done = true;
        }).catch(e => { throw e; });
    }
    wait() {
        return this.promise;
    }
}
export class AggregateContinuationTask {
    constructor(antecedents, next, context, ...args) {
        this.done = false;
        this.promise = Promise.all(antecedents.map(t => t.wait())).then(() => {
            const nextResult = next.call(context, ...args);
            if (nextResult === void 0) {
                this.done = true;
            }
            else {
                return nextResult.wait().then(() => {
                    this.done = true;
                });
            }
        });
    }
    wait() {
        return this.promise;
    }
}
export class AggregateTerminalTask {
    constructor(antecedents) {
        this.done = false;
        this.promise = Promise.all(antecedents.map(t => t.wait())).then(() => {
            this.done = true;
        });
    }
    wait() {
        return this.promise;
    }
}
export function hasAsyncWork(value) {
    return !(value === void 0 || value.done === true);
}
//# sourceMappingURL=lifecycle-task.js.map