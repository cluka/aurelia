var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@aurelia/runtime", "./instructions"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RefBindingCommand = exports.ClassBindingCommand = exports.StyleBindingCommand = exports.AttrBindingCommand = exports.CaptureBindingCommand = exports.DelegateBindingCommand = exports.TriggerBindingCommand = void 0;
    const runtime_1 = require("@aurelia/runtime");
    const instructions_1 = require("./instructions");
    /**
     * Trigger binding command. Compile attr with binding symbol with command `trigger` to `TriggerBindingInstruction`
     */
    let TriggerBindingCommand = class TriggerBindingCommand {
        constructor() {
            this.bindingType = 4182 /* TriggerCommand */;
        }
        compile(binding) {
            return new instructions_1.TriggerBindingInstruction(binding.expression, runtime_1.getTarget(binding, false));
        }
    };
    TriggerBindingCommand = __decorate([
        runtime_1.bindingCommand('trigger')
    ], TriggerBindingCommand);
    exports.TriggerBindingCommand = TriggerBindingCommand;
    /**
     * Delegate binding command. Compile attr with binding symbol with command `delegate` to `DelegateBindingInstruction`
     */
    let DelegateBindingCommand = class DelegateBindingCommand {
        constructor() {
            this.bindingType = 4184 /* DelegateCommand */;
        }
        compile(binding) {
            return new instructions_1.DelegateBindingInstruction(binding.expression, runtime_1.getTarget(binding, false));
        }
    };
    DelegateBindingCommand = __decorate([
        runtime_1.bindingCommand('delegate')
    ], DelegateBindingCommand);
    exports.DelegateBindingCommand = DelegateBindingCommand;
    /**
     * Capture binding command. Compile attr with binding symbol with command `capture` to `CaptureBindingInstruction`
     */
    let CaptureBindingCommand = class CaptureBindingCommand {
        constructor() {
            this.bindingType = 4183 /* CaptureCommand */;
        }
        compile(binding) {
            return new instructions_1.CaptureBindingInstruction(binding.expression, runtime_1.getTarget(binding, false));
        }
    };
    CaptureBindingCommand = __decorate([
        runtime_1.bindingCommand('capture')
    ], CaptureBindingCommand);
    exports.CaptureBindingCommand = CaptureBindingCommand;
    /**
     * Attr binding command. Compile attr with binding symbol with command `attr` to `AttributeBindingInstruction`
     */
    let AttrBindingCommand = class AttrBindingCommand {
        constructor() {
            this.bindingType = 32 /* IsProperty */;
        }
        compile(binding) {
            const target = runtime_1.getTarget(binding, false);
            return new instructions_1.AttributeBindingInstruction(target, binding.expression, target);
        }
    };
    AttrBindingCommand = __decorate([
        runtime_1.bindingCommand('attr')
    ], AttrBindingCommand);
    exports.AttrBindingCommand = AttrBindingCommand;
    /**
     * Style binding command. Compile attr with binding symbol with command `style` to `AttributeBindingInstruction`
     */
    let StyleBindingCommand = class StyleBindingCommand {
        constructor() {
            this.bindingType = 32 /* IsProperty */;
        }
        compile(binding) {
            return new instructions_1.AttributeBindingInstruction('style', binding.expression, runtime_1.getTarget(binding, false));
        }
    };
    StyleBindingCommand = __decorate([
        runtime_1.bindingCommand('style')
    ], StyleBindingCommand);
    exports.StyleBindingCommand = StyleBindingCommand;
    /**
     * Class binding command. Compile attr with binding symbol with command `class` to `AttributeBindingInstruction`
     */
    let ClassBindingCommand = class ClassBindingCommand {
        constructor() {
            this.bindingType = 32 /* IsProperty */;
        }
        compile(binding) {
            return new instructions_1.AttributeBindingInstruction('class', binding.expression, runtime_1.getTarget(binding, false));
        }
    };
    ClassBindingCommand = __decorate([
        runtime_1.bindingCommand('class')
    ], ClassBindingCommand);
    exports.ClassBindingCommand = ClassBindingCommand;
    /**
     * Binding command to refer different targets (element, custom element/attribute view models, controller) afterAttachChildren to an element
     */
    let RefBindingCommand = class RefBindingCommand {
        constructor() {
            this.bindingType = 32 /* IsProperty */ | 4096 /* IgnoreCustomAttr */;
        }
        compile(binding) {
            return new runtime_1.RefBindingInstruction(binding.expression, runtime_1.getTarget(binding, false));
        }
    };
    RefBindingCommand = __decorate([
        runtime_1.bindingCommand('ref')
    ], RefBindingCommand);
    exports.RefBindingCommand = RefBindingCommand;
});
//# sourceMappingURL=binding-commands.js.map