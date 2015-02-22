/*
 * Copyright (C) 2013 salesforce.com, inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/*jslint sub: true */
var p = Action.prototype;
exp(p,
    "auraType", p.auraType,
    "getDef", p.getDef,
    "setParams", p.setParams,
    "setParam", p.setParam,
    "getParam", p.getParam,
    "getParams", p.getParams,
    "setCallback", p.setCallback,
    "getCallback", p.getCallback,
    "run", p.run,
    "runDeprecated", p.runDeprecated,
    "getState", p.getState,
    "getReturnValue", p.getReturnValue,
    "getStorage", p.getStorage,
    "runAfter", p.runAfter,
    "getError", p.getError,
    "setParentAction", p.setParentAction,
    "setAbortable", p.setAbortable,
    "isAbortable", p.isAbortable,
    "isBackground", p.isBackground,
    "setBackground", p.setBackground,
    "setExclusive", p.setExclusive,
    "isExclusive", p.isExclusive,
    "setChained", p.setChained,
    "setStorable", p.setStorable,
    "isStorable", p.isStorable,
    "setCaboose", p.setCaboose,
    "isCaboose", p.isCaboose,
    "setAllAboardCallback", p.setAllAboardCallback,
    "isFromStorage", p.isFromStorage,
    "toJSON", p.toJSON,
    //#if {"excludeModes" : ["PRODUCTION", "PRODUCTIONDEBUG"]}
     "getStorageKey", p.getStorageKey,
    //#end
    "getId", p.getId
);
