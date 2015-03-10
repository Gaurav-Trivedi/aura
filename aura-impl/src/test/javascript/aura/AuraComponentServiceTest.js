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
Function.RegisterNamespace("Test.Aura");

[Fixture]
Test.Aura.AuraComponentServiceTest = function(){
    var $A = {
        ns : {
            "LibraryDefRegistry": function(){}
        },
        assert: function(condition, message) {
            if (!condition) {
                var error = new Error(message);
                throw error;
            }
        },
        util: {
            isFunction: function(obj){
                return false;
            }
        }
    };
    
    //Mock the exp() function defined in Aura.js, this is originally used for exposing members using a export.js file
    Mocks.GetMocks(Object.Global(), { "exp": function(){}, "$A": $A, "window": function(){}, "Components": function(){} })(function(){
        // #import aura.AuraComponentService
    });

    // Mocks necessary to create a new AuraComponentService Object
    var mockOnLoadUtil = Mocks.GetMocks(Object.Global(), {
        "ComponentDefRegistry": function(){},
        "ControllerDefRegistry": function(){},
        "ActionDefRegistry": function(){},
        "ModelDefRegistry": function(){},
        "ProviderDefRegistry": function(){},
        "RendererDefRegistry": function(){},
        "HelperDefRegistry": function(){},
        "exp": function(){},
        "$A": $A,
        "window": function(){},
        "Components": function(){}
    });

    var targetService;
    mockOnLoadUtil(function(){
        targetService = new $A.ns.AuraComponentService();
    });


    [Fixture]
    function createComponent(){
        var $Amock=Mocks.GetMock(Object.Global(),"$A",{
            assert:function(condition,message){
                if(!condition)throw message;
            },
            util:{
                isString:function(obj){
                    return typeof obj === 'string';
                },
                isObject:function(obj){
                    return typeof obj === "object" && obj !== null && !this.isArray(obj);
                },
                isFunction:function(obj){
                    return !!obj && Object.prototype.toString.apply(obj) === '[object Function]';
                }
            }
        });

        [Fact]
        function ThrowsIfTypeDoesNotImplementToString(){
            var expected="ComponentService.createComponent(): 'type' must be a valid String.";

            var actual=Record.Exception(function(){
                $Amock(function(){
                    targetService.createComponent(null);
                })
            });

            Assert.Equal(expected,actual);
        }

        [Fact]
        function ThrowsIfAttributesIsNotNullAndNotAnOjbect(){
            var expected="ComponentService.createComponent(): 'attributes' must be a valid Object.";

            var actual=Record.Exception(function(){
                $Amock(function(){
                    targetService.createComponent("test",7357);
                })
            });

            Assert.Equal(expected,actual);
        }

        [Fact]
        function ThrowsIfCallbackisNotAValidFunctionPointer(){
            var expected="ComponentService.createComponent(): 'callback' must be a Function pointer.";

            var actual=Record.Exception(function(){
                $Amock(function(){
                    targetService.createComponent("test",null,{});
                })
            });

            Assert.Equal(expected,actual);
        }
    }

    [Fixture]
    function newComponentAsync(){
        [Fact]
        function AssertsConfigIsPresent(){
            // Arrange
            var expected = "ComponentService.newComponentAsync(): 'config' must be a valid Object.";
            var target;
            mockOnLoadUtil(function(){
                target = new $A.ns.AuraComponentService();
            });

            // Act
            mockOnLoadUtil(function(){
                actual = Record.Exception(function(){
                    target.newComponentAsync(null, function(){}, undefined);
                });
            });

            // Assert
            Assert.Equal(expected, actual);
        }

        [Fact]
        function AssertsCallbackIsPresent(){
            // Arrange
            var expected = "ComponentService.newComponentAsync(): 'callback' must be a Function pointer.";
            var target;
            mockOnLoadUtil(function(){
                target = new $A.ns.AuraComponentService();
            });

            // Act
            mockOnLoadUtil(function(){
                actual = Record.Exception(function(){
                    target.newComponentAsync(null, undefined, {});
                });
            });

            // Assert
            Assert.Equal(expected, actual);
        }
    }
}
