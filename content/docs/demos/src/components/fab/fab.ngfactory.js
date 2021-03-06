/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from './fab';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/change_detection/change_detection';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/query_list';
import * as import7 from '@angular/core/src/linker/view_type';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from '@angular/core/src/linker/element_ref';
import * as import10 from '../../config/config';
import * as import11 from '../icon/icon.ngfactory';
import * as import12 from '../icon/icon';
export var Wrapper_FabContainer = (function () {
    function Wrapper_FabContainer(p0) {
        this._changed = false;
        this.context = new import0.FabContainer(p0);
    }
    Wrapper_FabContainer.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_FabContainer.prototype.ngOnDestroy = function () {
        this.context.ngOnDestroy();
    };
    Wrapper_FabContainer.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_FabContainer.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_FabContainer.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_FabContainer.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_FabContainer;
}());
export var Wrapper_FabButton = (function () {
    function Wrapper_FabButton(p0, p1, p2) {
        this._changed = false;
        this.context = new import0.FabButton(p0, p1, p2);
        this._expr_0 = import2.UNINITIALIZED;
        this._expr_1 = import2.UNINITIALIZED;
    }
    Wrapper_FabButton.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_FabButton.prototype.ngOnDestroy = function () {
    };
    Wrapper_FabButton.prototype.check_color = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.color = currValue;
            this._expr_0 = currValue;
        }
    };
    Wrapper_FabButton.prototype.check_mode = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_1, currValue))) {
            this._changed = true;
            this.context.mode = currValue;
            this._expr_1 = currValue;
        }
    };
    Wrapper_FabButton.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_FabButton.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_FabButton.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_FabButton.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_FabButton;
}());
export var Wrapper_FabList = (function () {
    function Wrapper_FabList(p0, p1, p2) {
        this._changed = false;
        this.context = new import0.FabList(p0, p1, p2);
    }
    Wrapper_FabList.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_FabList.prototype.ngOnDestroy = function () {
    };
    Wrapper_FabList.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_FabList.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_FabList.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_FabList.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_FabList;
}());
var renderType_FabContainer_Host = import3.createRenderComponentType('', 0, import5.ViewEncapsulation.None, [], {});
var View_FabContainer_Host0 = (function (_super) {
    __extends(View_FabContainer_Host0, _super);
    function View_FabContainer_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_FabContainer_Host0, renderType_FabContainer_Host, import7.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import2.ChangeDetectorStatus.CheckAlways);
    }
    View_FabContainer_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'ion-fab', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_FabContainer0(this.viewUtils, this, 0, this._el_0);
        this._FabContainer_0_3 = new Wrapper_FabContainer(new import9.ElementRef(this._el_0));
        this._query_FabButton_0_0 = new import6.QueryList();
        this._query_FabList_0_1 = new import6.QueryList();
        this._query_FabButton_0_0.reset([]);
        this._FabContainer_0_3.context._mainButton = this._query_FabButton_0_0.first;
        this.compView_0.create(this._FabContainer_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import8.ComponentRef_(0, this, this._el_0, this._FabContainer_0_3.context);
    };
    View_FabContainer_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.FabContainer) && (0 === requestNodeIndex))) {
            return this._FabContainer_0_3.context;
        }
        return notFoundResult;
    };
    View_FabContainer_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._FabContainer_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        if (!throwOnChange) {
            if (this._query_FabList_0_1.dirty) {
                this._query_FabList_0_1.reset([]);
                this._FabContainer_0_3.context._fabLists = this._query_FabList_0_1;
                this._query_FabList_0_1.notifyOnChanges();
            }
            if ((this.numberOfChecks === 0)) {
                this._FabContainer_0_3.context.ngAfterContentInit();
            }
        }
        this.compView_0.detectChanges(throwOnChange);
    };
    View_FabContainer_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
        this._FabContainer_0_3.ngOnDestroy();
    };
    View_FabContainer_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_FabContainer_Host0.prototype.visitProjectableNodesInternal = function (nodeIndex, ngContentIndex, cb, ctx) {
        if (((nodeIndex == 0) && (ngContentIndex == 0))) { }
    };
    return View_FabContainer_Host0;
}(import1.AppView));
export var FabContainerNgFactory = new import8.ComponentFactory('ion-fab', View_FabContainer_Host0, import0.FabContainer);
var styles_FabContainer = [];
var renderType_FabContainer = import3.createRenderComponentType('', 1, import5.ViewEncapsulation.None, styles_FabContainer, {});
export var View_FabContainer0 = (function (_super) {
    __extends(View_FabContainer0, _super);
    function View_FabContainer0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_FabContainer0, renderType_FabContainer, import7.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import2.ChangeDetectorStatus.CheckAlways);
    }
    View_FabContainer0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this.projectNodes(parentRenderNode, 0);
        this.init(null, (this.renderer.directRenderer ? null : []), null);
        return null;
    };
    return View_FabContainer0;
}(import1.AppView));
var renderType_FabButton_Host = import3.createRenderComponentType('', 0, import5.ViewEncapsulation.None, [], {});
var View_FabButton_Host0 = (function (_super) {
    __extends(View_FabButton_Host0, _super);
    function View_FabButton_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_FabButton_Host0, renderType_FabButton_Host, import7.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import2.ChangeDetectorStatus.CheckAlways);
    }
    View_FabButton_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'div', new import3.InlineArray2(2, 'ion-fab', ''), rootSelector, null);
        this.compView_0 = new View_FabButton0(this.viewUtils, this, 0, this._el_0);
        this._FabButton_0_3 = new Wrapper_FabButton(this.injectorGet(import10.Config, this.parentIndex), new import9.ElementRef(this._el_0), this.renderer);
        this.compView_0.create(this._FabButton_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import8.ComponentRef_(0, this, this._el_0, this._FabButton_0_3.context);
    };
    View_FabButton_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.FabButton) && (0 === requestNodeIndex))) {
            return this._FabButton_0_3.context;
        }
        return notFoundResult;
    };
    View_FabButton_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        if (this._FabButton_0_3.ngDoCheck(this, this._el_0, throwOnChange)) {
            this.compView_0.markAsCheckOnce();
        }
        this.compView_0.detectChanges(throwOnChange);
    };
    View_FabButton_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_FabButton_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_FabButton_Host0.prototype.visitProjectableNodesInternal = function (nodeIndex, ngContentIndex, cb, ctx) {
        if (((nodeIndex == 0) && (ngContentIndex == 0))) { }
    };
    return View_FabButton_Host0;
}(import1.AppView));
export var FabButtonNgFactory = new import8.ComponentFactory('[ion-fab]', View_FabButton_Host0, import0.FabButton);
var styles_FabButton = [];
var renderType_FabButton = import3.createRenderComponentType('', 1, import5.ViewEncapsulation.None, styles_FabButton, {});
export var View_FabButton0 = (function (_super) {
    __extends(View_FabButton0, _super);
    function View_FabButton0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_FabButton0, renderType_FabButton, import7.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import2.ChangeDetectorStatus.CheckOnce);
    }
    View_FabButton0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'ion-icon', new import3.InlineArray8(6, 'class', 'fab-close-icon', 'name', 'close', 'role', 'img'), null);
        this._Icon_0_3 = new import11.Wrapper_Icon(this.parentView.injectorGet(import10.Config, this.parentIndex), new import9.ElementRef(this._el_0), this.renderer);
        this._el_1 = import3.createRenderElement(this.renderer, parentRenderNode, 'span', new import3.InlineArray2(2, 'class', 'button-inner'), null);
        this.projectNodes(this._el_1, 0);
        this._el_2 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'class', 'button-effect'), null);
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._el_1,
            this._el_2
        ]), null);
        return null;
    };
    View_FabButton0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import12.Icon) && (0 === requestNodeIndex))) {
            return this._Icon_0_3.context;
        }
        return notFoundResult;
    };
    View_FabButton0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0_0_0 = 'close';
        this._Icon_0_3.check_name(currVal_0_0_0, throwOnChange, false);
        this._Icon_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this._Icon_0_3.checkHost(this, this, this._el_0, throwOnChange);
    };
    View_FabButton0.prototype.destroyInternal = function () {
        this._Icon_0_3.ngOnDestroy();
    };
    return View_FabButton0;
}(import1.AppView));
//# sourceMappingURL=fab.ngfactory.js.map