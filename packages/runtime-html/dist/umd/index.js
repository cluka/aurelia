(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./attribute-syntax-transformer", "./binding-commands", "./binding/listener", "./binding/attribute", "./observation/attribute-ns-accessor", "./observation/checked-observer", "./observation/class-attribute-accessor", "./observation/data-attribute-accessor", "./observation/element-property-accessor", "./observation/event-manager", "./observation/observer-locator", "./observation/select-value-observer", "./observation/style-attribute-accessor", "./observation/svg-analyzer", "./observation/value-attribute-observer", "./resources/binding-behaviors/attr", "./resources/binding-behaviors/self", "./resources/binding-behaviors/update-trigger", "./resources/custom-attributes/blur", "./resources/custom-attributes/focus", "./resources/custom-attributes/portal", "./resources/custom-elements/compose", "./configuration", "./debugging", "./template-binder", "./template-element-factory", "./create-element", "./definitions", "./dom", "./instructions", "./projectors", "./styles/style-configuration", "./styles/css-modules-registry", "./styles/shadow-dom-registry", "./styles/shadow-dom-styles"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.IShadowDOMGlobalStyles = exports.IShadowDOMStyles = exports.StyleElementStyles = exports.AdoptedStyleSheetsStyles = exports.shadowCSS = exports.IShadowDOMStyleFactory = exports.ShadowDOMRegistry = exports.cssModules = exports.CSSModulesProcessorRegistry = exports.StyleConfiguration = exports.ShadowDOMProjector = exports.HTMLProjectorLocator = exports.HostProjector = exports.ContainerlessProjector = exports.TriggerBindingInstruction = exports.TextBindingInstruction = exports.StylePropertyBindingInstruction = exports.SetStyleAttributeInstruction = exports.SetClassAttributeInstruction = exports.SetAttributeInstruction = exports.DelegateBindingInstruction = exports.CaptureBindingInstruction = exports.AttributeBindingInstruction = exports.ILocation = exports.IWindow = exports.IHistory = exports.FragmentNodeSequence = exports.DOM = exports.HTMLDOM = exports.NodeType = exports.isHTMLTargetedInstruction = exports.HTMLTargetedInstructionType = exports.RenderPlan = exports.createElement = exports.ITemplateElementFactory = exports.TemplateBinder = exports.stringifyTemplateDefinition = exports.stringifyInstructions = exports.stringifyDOM = exports.RuntimeHtmlConfiguration = exports.DefaultRenderers = exports.TextBindingRendererRegistration = exports.StylePropertyBindingRendererRegistration = exports.SetStyleAttributeRendererRegistration = exports.SetClassAttributeRendererRegistration = exports.SetAttributeRendererRegistration = exports.ListenerBindingRendererRegistration = exports.AttributeBindingRendererRegistration = exports.DefaultResources = exports.ComposeRegistration = exports.UpdateTriggerBindingBehaviorRegistration = exports.SelfBindingBehaviorRegistration = exports.AttrBindingBehaviorRegistration = exports.DefaultBindingLanguage = exports.StyleBindingCommandRegistration = exports.ClassBindingCommandRegistration = exports.AttrBindingCommandRegistration = exports.CaptureBindingCommandRegistration = exports.DelegateBindingCommandRegistration = exports.TriggerBindingCommandRegistration = exports.DefaultComponents = exports.ITargetObserverLocatorRegistration = exports.ITargetAccessorLocatorRegistration = exports.IProjectorLocatorRegistration = exports.IAttrSyntaxTransformerRegistation = exports.ITemplateElementFactoryRegistration = exports.ITemplateCompilerRegistration = exports.Compose = exports.Portal = exports.Focus = exports.BlurManager = exports.Blur = exports.UpdateTriggerBindingBehavior = exports.SelfBindingBehavior = exports.AttrBindingBehavior = exports.ValueAttributeObserver = exports.ISVGAnalyzer = exports.StyleAttributeAccessor = exports.SelectValueObserver = exports.TargetObserverLocator = exports.TargetAccessorLocator = exports.EventManager = exports.EventSubscriber = exports.IEventManager = exports.TriggerSubscription = exports.DelegateOrCaptureSubscription = exports.ListenerTracker = exports.ElementPropertyAccessor = exports.DataAttributeAccessor = exports.ClassAttributeAccessor = exports.CheckedObserver = exports.AttributeNSAccessor = exports.AttributeBinding = exports.Listener = exports.StyleBindingCommand = exports.ClassBindingCommand = exports.AttrBindingCommand = exports.CaptureBindingCommand = exports.DelegateBindingCommand = exports.TriggerBindingCommand = exports.IAttrSyntaxTransformer = void 0;
    var attribute_syntax_transformer_1 = require("./attribute-syntax-transformer");
    Object.defineProperty(exports, "IAttrSyntaxTransformer", { enumerable: true, get: function () { return attribute_syntax_transformer_1.IAttrSyntaxTransformer; } });
    var binding_commands_1 = require("./binding-commands");
    Object.defineProperty(exports, "TriggerBindingCommand", { enumerable: true, get: function () { return binding_commands_1.TriggerBindingCommand; } });
    Object.defineProperty(exports, "DelegateBindingCommand", { enumerable: true, get: function () { return binding_commands_1.DelegateBindingCommand; } });
    Object.defineProperty(exports, "CaptureBindingCommand", { enumerable: true, get: function () { return binding_commands_1.CaptureBindingCommand; } });
    Object.defineProperty(exports, "AttrBindingCommand", { enumerable: true, get: function () { return binding_commands_1.AttrBindingCommand; } });
    Object.defineProperty(exports, "ClassBindingCommand", { enumerable: true, get: function () { return binding_commands_1.ClassBindingCommand; } });
    Object.defineProperty(exports, "StyleBindingCommand", { enumerable: true, get: function () { return binding_commands_1.StyleBindingCommand; } });
    var listener_1 = require("./binding/listener");
    Object.defineProperty(exports, "Listener", { enumerable: true, get: function () { return listener_1.Listener; } });
    var attribute_1 = require("./binding/attribute");
    Object.defineProperty(exports, "AttributeBinding", { enumerable: true, get: function () { return attribute_1.AttributeBinding; } });
    var attribute_ns_accessor_1 = require("./observation/attribute-ns-accessor");
    Object.defineProperty(exports, "AttributeNSAccessor", { enumerable: true, get: function () { return attribute_ns_accessor_1.AttributeNSAccessor; } });
    var checked_observer_1 = require("./observation/checked-observer");
    Object.defineProperty(exports, "CheckedObserver", { enumerable: true, get: function () { return checked_observer_1.CheckedObserver; } });
    var class_attribute_accessor_1 = require("./observation/class-attribute-accessor");
    Object.defineProperty(exports, "ClassAttributeAccessor", { enumerable: true, get: function () { return class_attribute_accessor_1.ClassAttributeAccessor; } });
    var data_attribute_accessor_1 = require("./observation/data-attribute-accessor");
    Object.defineProperty(exports, "DataAttributeAccessor", { enumerable: true, get: function () { return data_attribute_accessor_1.DataAttributeAccessor; } });
    var element_property_accessor_1 = require("./observation/element-property-accessor");
    Object.defineProperty(exports, "ElementPropertyAccessor", { enumerable: true, get: function () { return element_property_accessor_1.ElementPropertyAccessor; } });
    var event_manager_1 = require("./observation/event-manager");
    Object.defineProperty(exports, "ListenerTracker", { enumerable: true, get: function () { return event_manager_1.ListenerTracker; } });
    Object.defineProperty(exports, "DelegateOrCaptureSubscription", { enumerable: true, get: function () { return event_manager_1.DelegateOrCaptureSubscription; } });
    Object.defineProperty(exports, "TriggerSubscription", { enumerable: true, get: function () { return event_manager_1.TriggerSubscription; } });
    Object.defineProperty(exports, "IEventManager", { enumerable: true, get: function () { return event_manager_1.IEventManager; } });
    Object.defineProperty(exports, "EventSubscriber", { enumerable: true, get: function () { return event_manager_1.EventSubscriber; } });
    Object.defineProperty(exports, "EventManager", { enumerable: true, get: function () { return event_manager_1.EventManager; } });
    var observer_locator_1 = require("./observation/observer-locator");
    Object.defineProperty(exports, "TargetAccessorLocator", { enumerable: true, get: function () { return observer_locator_1.TargetAccessorLocator; } });
    Object.defineProperty(exports, "TargetObserverLocator", { enumerable: true, get: function () { return observer_locator_1.TargetObserverLocator; } });
    var select_value_observer_1 = require("./observation/select-value-observer");
    Object.defineProperty(exports, "SelectValueObserver", { enumerable: true, get: function () { return select_value_observer_1.SelectValueObserver; } });
    var style_attribute_accessor_1 = require("./observation/style-attribute-accessor");
    Object.defineProperty(exports, "StyleAttributeAccessor", { enumerable: true, get: function () { return style_attribute_accessor_1.StyleAttributeAccessor; } });
    var svg_analyzer_1 = require("./observation/svg-analyzer");
    Object.defineProperty(exports, "ISVGAnalyzer", { enumerable: true, get: function () { return svg_analyzer_1.ISVGAnalyzer; } });
    var value_attribute_observer_1 = require("./observation/value-attribute-observer");
    Object.defineProperty(exports, "ValueAttributeObserver", { enumerable: true, get: function () { return value_attribute_observer_1.ValueAttributeObserver; } });
    var attr_1 = require("./resources/binding-behaviors/attr");
    Object.defineProperty(exports, "AttrBindingBehavior", { enumerable: true, get: function () { return attr_1.AttrBindingBehavior; } });
    var self_1 = require("./resources/binding-behaviors/self");
    Object.defineProperty(exports, "SelfBindingBehavior", { enumerable: true, get: function () { return self_1.SelfBindingBehavior; } });
    var update_trigger_1 = require("./resources/binding-behaviors/update-trigger");
    Object.defineProperty(exports, "UpdateTriggerBindingBehavior", { enumerable: true, get: function () { return update_trigger_1.UpdateTriggerBindingBehavior; } });
    var blur_1 = require("./resources/custom-attributes/blur");
    Object.defineProperty(exports, "Blur", { enumerable: true, get: function () { return blur_1.Blur; } });
    Object.defineProperty(exports, "BlurManager", { enumerable: true, get: function () { return blur_1.BlurManager; } });
    var focus_1 = require("./resources/custom-attributes/focus");
    Object.defineProperty(exports, "Focus", { enumerable: true, get: function () { return focus_1.Focus; } });
    var portal_1 = require("./resources/custom-attributes/portal");
    Object.defineProperty(exports, "Portal", { enumerable: true, get: function () { return portal_1.Portal; } });
    var compose_1 = require("./resources/custom-elements/compose");
    Object.defineProperty(exports, "Compose", { enumerable: true, get: function () { return compose_1.Compose; } });
    var configuration_1 = require("./configuration");
    Object.defineProperty(exports, "ITemplateCompilerRegistration", { enumerable: true, get: function () { return configuration_1.ITemplateCompilerRegistration; } });
    Object.defineProperty(exports, "ITemplateElementFactoryRegistration", { enumerable: true, get: function () { return configuration_1.ITemplateElementFactoryRegistration; } });
    Object.defineProperty(exports, "IAttrSyntaxTransformerRegistation", { enumerable: true, get: function () { return configuration_1.IAttrSyntaxTransformerRegistation; } });
    Object.defineProperty(exports, "IProjectorLocatorRegistration", { enumerable: true, get: function () { return configuration_1.IProjectorLocatorRegistration; } });
    Object.defineProperty(exports, "ITargetAccessorLocatorRegistration", { enumerable: true, get: function () { return configuration_1.ITargetAccessorLocatorRegistration; } });
    Object.defineProperty(exports, "ITargetObserverLocatorRegistration", { enumerable: true, get: function () { return configuration_1.ITargetObserverLocatorRegistration; } });
    Object.defineProperty(exports, "DefaultComponents", { enumerable: true, get: function () { return configuration_1.DefaultComponents; } });
    Object.defineProperty(exports, "TriggerBindingCommandRegistration", { enumerable: true, get: function () { return configuration_1.TriggerBindingCommandRegistration; } });
    Object.defineProperty(exports, "DelegateBindingCommandRegistration", { enumerable: true, get: function () { return configuration_1.DelegateBindingCommandRegistration; } });
    Object.defineProperty(exports, "CaptureBindingCommandRegistration", { enumerable: true, get: function () { return configuration_1.CaptureBindingCommandRegistration; } });
    Object.defineProperty(exports, "AttrBindingCommandRegistration", { enumerable: true, get: function () { return configuration_1.AttrBindingCommandRegistration; } });
    Object.defineProperty(exports, "ClassBindingCommandRegistration", { enumerable: true, get: function () { return configuration_1.ClassBindingCommandRegistration; } });
    Object.defineProperty(exports, "StyleBindingCommandRegistration", { enumerable: true, get: function () { return configuration_1.StyleBindingCommandRegistration; } });
    Object.defineProperty(exports, "DefaultBindingLanguage", { enumerable: true, get: function () { return configuration_1.DefaultBindingLanguage; } });
    Object.defineProperty(exports, "AttrBindingBehaviorRegistration", { enumerable: true, get: function () { return configuration_1.AttrBindingBehaviorRegistration; } });
    Object.defineProperty(exports, "SelfBindingBehaviorRegistration", { enumerable: true, get: function () { return configuration_1.SelfBindingBehaviorRegistration; } });
    Object.defineProperty(exports, "UpdateTriggerBindingBehaviorRegistration", { enumerable: true, get: function () { return configuration_1.UpdateTriggerBindingBehaviorRegistration; } });
    Object.defineProperty(exports, "ComposeRegistration", { enumerable: true, get: function () { return configuration_1.ComposeRegistration; } });
    Object.defineProperty(exports, "DefaultResources", { enumerable: true, get: function () { return configuration_1.DefaultResources; } });
    Object.defineProperty(exports, "AttributeBindingRendererRegistration", { enumerable: true, get: function () { return configuration_1.AttributeBindingRendererRegistration; } });
    Object.defineProperty(exports, "ListenerBindingRendererRegistration", { enumerable: true, get: function () { return configuration_1.ListenerBindingRendererRegistration; } });
    Object.defineProperty(exports, "SetAttributeRendererRegistration", { enumerable: true, get: function () { return configuration_1.SetAttributeRendererRegistration; } });
    Object.defineProperty(exports, "SetClassAttributeRendererRegistration", { enumerable: true, get: function () { return configuration_1.SetClassAttributeRendererRegistration; } });
    Object.defineProperty(exports, "SetStyleAttributeRendererRegistration", { enumerable: true, get: function () { return configuration_1.SetStyleAttributeRendererRegistration; } });
    Object.defineProperty(exports, "StylePropertyBindingRendererRegistration", { enumerable: true, get: function () { return configuration_1.StylePropertyBindingRendererRegistration; } });
    Object.defineProperty(exports, "TextBindingRendererRegistration", { enumerable: true, get: function () { return configuration_1.TextBindingRendererRegistration; } });
    Object.defineProperty(exports, "DefaultRenderers", { enumerable: true, get: function () { return configuration_1.DefaultRenderers; } });
    Object.defineProperty(exports, "RuntimeHtmlConfiguration", { enumerable: true, get: function () { return configuration_1.RuntimeHtmlConfiguration; } });
    var debugging_1 = require("./debugging");
    Object.defineProperty(exports, "stringifyDOM", { enumerable: true, get: function () { return debugging_1.stringifyDOM; } });
    Object.defineProperty(exports, "stringifyInstructions", { enumerable: true, get: function () { return debugging_1.stringifyInstructions; } });
    Object.defineProperty(exports, "stringifyTemplateDefinition", { enumerable: true, get: function () { return debugging_1.stringifyTemplateDefinition; } });
    var template_binder_1 = require("./template-binder");
    Object.defineProperty(exports, "TemplateBinder", { enumerable: true, get: function () { return template_binder_1.TemplateBinder; } });
    var template_element_factory_1 = require("./template-element-factory");
    Object.defineProperty(exports, "ITemplateElementFactory", { enumerable: true, get: function () { return template_element_factory_1.ITemplateElementFactory; } });
    var create_element_1 = require("./create-element");
    Object.defineProperty(exports, "createElement", { enumerable: true, get: function () { return create_element_1.createElement; } });
    Object.defineProperty(exports, "RenderPlan", { enumerable: true, get: function () { return create_element_1.RenderPlan; } });
    var definitions_1 = require("./definitions");
    Object.defineProperty(exports, "HTMLTargetedInstructionType", { enumerable: true, get: function () { return definitions_1.HTMLTargetedInstructionType; } });
    Object.defineProperty(exports, "isHTMLTargetedInstruction", { enumerable: true, get: function () { return definitions_1.isHTMLTargetedInstruction; } });
    var dom_1 = require("./dom");
    Object.defineProperty(exports, "NodeType", { enumerable: true, get: function () { return dom_1.NodeType; } });
    Object.defineProperty(exports, "HTMLDOM", { enumerable: true, get: function () { return dom_1.HTMLDOM; } });
    Object.defineProperty(exports, "DOM", { enumerable: true, get: function () { return dom_1.DOM; } });
    Object.defineProperty(exports, "FragmentNodeSequence", { enumerable: true, get: function () { return dom_1.FragmentNodeSequence; } });
    Object.defineProperty(exports, "IHistory", { enumerable: true, get: function () { return dom_1.IHistory; } });
    Object.defineProperty(exports, "IWindow", { enumerable: true, get: function () { return dom_1.IWindow; } });
    Object.defineProperty(exports, "ILocation", { enumerable: true, get: function () { return dom_1.ILocation; } });
    var instructions_1 = require("./instructions");
    Object.defineProperty(exports, "AttributeBindingInstruction", { enumerable: true, get: function () { return instructions_1.AttributeBindingInstruction; } });
    Object.defineProperty(exports, "CaptureBindingInstruction", { enumerable: true, get: function () { return instructions_1.CaptureBindingInstruction; } });
    Object.defineProperty(exports, "DelegateBindingInstruction", { enumerable: true, get: function () { return instructions_1.DelegateBindingInstruction; } });
    Object.defineProperty(exports, "SetAttributeInstruction", { enumerable: true, get: function () { return instructions_1.SetAttributeInstruction; } });
    Object.defineProperty(exports, "SetClassAttributeInstruction", { enumerable: true, get: function () { return instructions_1.SetClassAttributeInstruction; } });
    Object.defineProperty(exports, "SetStyleAttributeInstruction", { enumerable: true, get: function () { return instructions_1.SetStyleAttributeInstruction; } });
    Object.defineProperty(exports, "StylePropertyBindingInstruction", { enumerable: true, get: function () { return instructions_1.StylePropertyBindingInstruction; } });
    Object.defineProperty(exports, "TextBindingInstruction", { enumerable: true, get: function () { return instructions_1.TextBindingInstruction; } });
    Object.defineProperty(exports, "TriggerBindingInstruction", { enumerable: true, get: function () { return instructions_1.TriggerBindingInstruction; } });
    var projectors_1 = require("./projectors");
    Object.defineProperty(exports, "ContainerlessProjector", { enumerable: true, get: function () { return projectors_1.ContainerlessProjector; } });
    Object.defineProperty(exports, "HostProjector", { enumerable: true, get: function () { return projectors_1.HostProjector; } });
    Object.defineProperty(exports, "HTMLProjectorLocator", { enumerable: true, get: function () { return projectors_1.HTMLProjectorLocator; } });
    Object.defineProperty(exports, "ShadowDOMProjector", { enumerable: true, get: function () { return projectors_1.ShadowDOMProjector; } });
    var style_configuration_1 = require("./styles/style-configuration");
    Object.defineProperty(exports, "StyleConfiguration", { enumerable: true, get: function () { return style_configuration_1.StyleConfiguration; } });
    var css_modules_registry_1 = require("./styles/css-modules-registry");
    Object.defineProperty(exports, "CSSModulesProcessorRegistry", { enumerable: true, get: function () { return css_modules_registry_1.CSSModulesProcessorRegistry; } });
    Object.defineProperty(exports, "cssModules", { enumerable: true, get: function () { return css_modules_registry_1.cssModules; } });
    var shadow_dom_registry_1 = require("./styles/shadow-dom-registry");
    Object.defineProperty(exports, "ShadowDOMRegistry", { enumerable: true, get: function () { return shadow_dom_registry_1.ShadowDOMRegistry; } });
    Object.defineProperty(exports, "IShadowDOMStyleFactory", { enumerable: true, get: function () { return shadow_dom_registry_1.IShadowDOMStyleFactory; } });
    Object.defineProperty(exports, "shadowCSS", { enumerable: true, get: function () { return shadow_dom_registry_1.shadowCSS; } });
    var shadow_dom_styles_1 = require("./styles/shadow-dom-styles");
    Object.defineProperty(exports, "AdoptedStyleSheetsStyles", { enumerable: true, get: function () { return shadow_dom_styles_1.AdoptedStyleSheetsStyles; } });
    Object.defineProperty(exports, "StyleElementStyles", { enumerable: true, get: function () { return shadow_dom_styles_1.StyleElementStyles; } });
    Object.defineProperty(exports, "IShadowDOMStyles", { enumerable: true, get: function () { return shadow_dom_styles_1.IShadowDOMStyles; } });
    Object.defineProperty(exports, "IShadowDOMGlobalStyles", { enumerable: true, get: function () { return shadow_dom_styles_1.IShadowDOMGlobalStyles; } });
});
//# sourceMappingURL=index.js.map