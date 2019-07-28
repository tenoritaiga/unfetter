(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"+s03":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.CAPABILITIES="Capabilities",e.INDICATORS="Indicators",e.MITIGATIONS="Mitigations",e.SENSORS="Sensors",e.UNASSESSED="Unassessed",e.UNKNOWN_TYPE="Unknown Type"}(t.AssessmentEvalTypeEnum||(t.AssessmentEvalTypeEnum={}))},"2E6l":function(e,t,n){"use strict";var i=n("mrSG").__extends;Object.defineProperty(t,"__esModule",{value:!0});var s=n("piJo"),r=n("D7lm");t.MarkingDefinition=function(e){function t(t){var n=e.call(this,t)||this;return n.definition={},n.type=r.StixCoreEnum.MARKING_DEFINITION,n}return i(t,e),t}(s.StixCore)},"3mu7":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}(n("z6jJ"));var i=n("TZ3W");t.Assess3Meta=i.Assess3Meta;var s=n("YA7C");t.Assessment=s.Assessment;var r=n("+s03");t.AssessmentEvalTypeEnum=r.AssessmentEvalTypeEnum;var a=n("QW2D");t.RiskByKillChain=a.RiskByKillChain},"6PbZ":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AssessmentObject=function(e,t,n,i){void 0===e&&(e=-1),void 0===t&&(t=[]),this.risk=e,this.questions=t,this.stix=n,this.assId=i}},"8hLa":function(e,t,n){"use strict";var i=n("mrSG").__extends;Object.defineProperty(t,"__esModule",{value:!0});var s=n("piJo"),r=n("D7lm");t.Indicator=function(e){function t(t){var n=e.call(this,t)||this;return n.valid_from=(new Date).toISOString(),n.type=r.StixCoreEnum.INDICATOR,n}return i(t,e),t}(s.StixExpanded)},BmJK:function(e,t,n){"use strict";var i=n("mrSG").__extends;Object.defineProperty(t,"__esModule",{value:!0});var s=n("piJo"),r=n("D7lm");t.AttackPattern=function(e){function t(t){var n=e.call(this,t)||this;return n.type=r.StixCoreEnum.ATTACK_PATTERN,n}return i(t,e),t}(s.StixExpanded)},CV0t:function(e,t,n){"use strict";var i=n("mrSG").__extends;Object.defineProperty(t,"__esModule",{value:!0});var s=n("piJo"),r=n("D7lm");t.Relationship=function(e){function t(t){var n=e.call(this,t)||this;return n.type=r.StixCoreEnum.RELATIONSHIP,n}return i(t,e),t}(s.StixCore)},Daao:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.MITRE_ATTACK="mitre-attack",e.LH_CTF="lh-ctf",e.NTCTF="ntctf"}(t.KillChainEnum||(t.KillChainEnum={}))},JeGi:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("TdqF");t.JsonApiLink=i.JsonApiLink},L5CO:function(e,t,n){"use strict";function i(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}Object.defineProperty(t,"__esModule",{value:!0}),i(n("JeGi")),i(n("3mu7")),i(n("QbyD"))},M8lA:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("cc7B"),s=n("lUYK");t.Question=function(){function e(){this.type=i.StixEnum.QUESTION,this.score=s.QuestionAnswerEnum.UNANSWERED}return e.prototype.toLongForm=function(e){switch(e){case s.QuestionAnswerEnum.LOW:return"LOW";case s.QuestionAnswerEnum.MEDIUM:return"MEDIUM";case s.QuestionAnswerEnum.SIGNIFICANT:return"SIGNIFICANT";case s.QuestionAnswerEnum.NOT_APPLICABLE:return"NOT APPLICABLE";case s.QuestionAnswerEnum.NONE:return"NONE";case s.QuestionAnswerEnum.UNANSWERED:return"UNANSWERED"}},e.prototype.toMIR=function(e){if(!e)return e;switch(e.toLowerCase()){case"protect":return"mitigate";case"detect":return"indicate";case"respond":return"respond";default:return}},e}()},N94G:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.GranularMarking=function(){}},NcI2:function(e,t,n){"use strict";var i=n("mrSG").__extends;Object.defineProperty(t,"__esModule",{value:!0});var s=n("piJo"),r=n("D7lm");t.Report=function(e){function t(t){var n=e.call(this,t)||this;return n.type=r.StixCoreEnum.REPORT,n}return i(t,e),t}(s.StixExpanded)},NdFd:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.StixCoreBundle=function(){function e(e){void 0===e&&(e=[]),this.objects=e,this.type="bundle",this.id="stix-archive-bundle",this.spec_version="2.0"}return e.prototype.toJson=function(e){return void 0===e&&(e="\t"),JSON.stringify(this,void 0,e)},e}()},Ourk:function(e,t,n){"use strict";n.d(t,"a",function(){return o}),n.d(t,"b",function(){return u});var i=n("CcnG"),s=(n("9It4"),n("Ip0R"),n("Fzqc"),n("Wf4p")),r=n("dWZg"),a=n("wFw1"),o=(n("lLAP"),n("YlbQ"),i["\u0275crt"]({encapsulation:2,styles:[".mat-radio-button{display:inline-block;-webkit-tap-highlight-color:transparent}.mat-radio-label{cursor:pointer;display:inline-flex;align-items:center;white-space:nowrap;vertical-align:middle}.mat-radio-container{box-sizing:border-box;display:inline-block;position:relative;width:20px;height:20px;flex-shrink:0}.mat-radio-outer-circle{box-sizing:border-box;height:20px;left:0;position:absolute;top:0;transition:border-color ease 280ms;width:20px;border-width:2px;border-style:solid;border-radius:50%}._mat-animation-noopable .mat-radio-outer-circle{transition:none}.mat-radio-inner-circle{border-radius:50%;box-sizing:border-box;height:20px;left:0;position:absolute;top:0;transition:transform ease 280ms,background-color ease 280ms;width:20px;transform:scale(.001)}._mat-animation-noopable .mat-radio-inner-circle{transition:none}.mat-radio-checked .mat-radio-inner-circle{transform:scale(.5)}@media screen and (-ms-high-contrast:active){.mat-radio-checked .mat-radio-inner-circle{border:solid 10px}}.mat-radio-label-content{display:inline-block;order:0;line-height:inherit;padding-left:8px;padding-right:0}[dir=rtl] .mat-radio-label-content{padding-right:8px;padding-left:0}.mat-radio-label-content.mat-radio-label-before{order:-1;padding-left:0;padding-right:8px}[dir=rtl] .mat-radio-label-content.mat-radio-label-before{padding-right:0;padding-left:8px}.mat-radio-disabled,.mat-radio-disabled .mat-radio-label{cursor:default}.mat-radio-ripple{position:absolute;left:calc(50% - 25px);top:calc(50% - 25px);height:50px;width:50px;z-index:1;pointer-events:none}"],data:{}}));function u(e){return i["\u0275vid"](2,[i["\u0275qud"](402653184,1,{_ripple:0}),i["\u0275qud"](402653184,2,{_inputElement:0}),(e()(),i["\u0275eld"](2,0,[["label",1]],null,11,"label",[["class","mat-radio-label"]],[[1,"for",0]],null,null,null,null)),(e()(),i["\u0275eld"](3,0,null,null,5,"div",[["class","mat-radio-container"]],null,null,null,null,null)),(e()(),i["\u0275eld"](4,0,null,null,0,"div",[["class","mat-radio-outer-circle"]],null,null,null,null,null)),(e()(),i["\u0275eld"](5,0,null,null,0,"div",[["class","mat-radio-inner-circle"]],null,null,null,null,null)),(e()(),i["\u0275eld"](6,0,null,null,2,"div",[["class","mat-radio-ripple mat-ripple"],["mat-ripple",""]],[[2,"mat-ripple-unbounded",null]],null,null,null,null)),i["\u0275did"](7,212992,[[1,4]],0,s.y,[i.ElementRef,i.NgZone,r.a,[2,s.m],[2,a.a]],{centered:[0,"centered"],radius:[1,"radius"],animation:[2,"animation"],disabled:[3,"disabled"],trigger:[4,"trigger"]},null),i["\u0275pod"](8,{enterDuration:0}),(e()(),i["\u0275eld"](9,0,[[2,0],["input",1]],null,0,"input",[["class","mat-radio-input cdk-visually-hidden"],["type","radio"]],[[8,"id",0],[8,"checked",0],[8,"disabled",0],[8,"tabIndex",0],[1,"name",0],[8,"required",0],[1,"aria-label",0],[1,"aria-labelledby",0],[1,"aria-describedby",0]],[[null,"change"],[null,"click"]],function(e,t,n){var i=!0,s=e.component;return"change"===t&&(i=!1!==s._onInputChange(n)&&i),"click"===t&&(i=!1!==s._onInputClick(n)&&i),i},null,null)),(e()(),i["\u0275eld"](10,0,null,null,3,"div",[["class","mat-radio-label-content"]],[[2,"mat-radio-label-before",null]],null,null,null,null)),(e()(),i["\u0275eld"](11,0,null,null,1,"span",[["style","display:none"]],null,null,null,null,null)),(e()(),i["\u0275ted"](-1,null,["\xa0"])),i["\u0275ncd"](null,0)],function(e,t){var n=t.component;e(t,7,0,!0,23,e(t,8,0,150),n._isRippleDisabled(),i["\u0275nov"](t,2))},function(e,t){var n=t.component;e(t,2,0,n.inputId),e(t,6,0,i["\u0275nov"](t,7).unbounded),e(t,9,0,n.inputId,n.checked,n.disabled,n.tabIndex,n.name,n.required,n.ariaLabel,n.ariaLabelledby,n.ariaDescribedby),e(t,10,0,"before"==n.labelPosition)})}},QW2D:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RiskByKillChain=function(){this.courseOfActions=[],this.indicators=[],this.sensors=[],this.capabilities=[]}},QbyD:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}(n("eOoX"))},TZ3W:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Assess3Meta=function(e,t,n,i,s,r){void 0===e&&(e=""),void 0===t&&(t=""),void 0===n&&(n=""),void 0===i&&(i=!1),void 0===s&&(s=!1),this.title=e,this.description=t,this.created_by_ref=n,this.includesIndicators=i,this.includesMitigations=s,this.baselineRef=r}},TdqF:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.JsonApiLink=function(){}},YA7C:function(e,t,n){"use strict";var i=n("mrSG").__extends;Object.defineProperty(t,"__esModule",{value:!0});var s=n("sGzu"),r=n("cc7B"),a=n("6PbZ"),o=n("TZ3W"),u=n("+s03");t.Assessment=function(e){function t(t){var n=e.call(this,t)||this;return n.assessmentMeta=new o.Assess3Meta,n.assessment_objects=[],n.type=r.StixEnum.ASSESSMENT,t&&(n.assessmentMeta=t.assessmentMeta||n.assessmentMeta,n.assessment_objects=t.assessment_objects||n.assessment_objects),n}return i(t,e),t.prototype.determineAssessmentType=function(){if(!this.assessment_objects||0===this.assessment_objects.length)return u.AssessmentEvalTypeEnum.UNASSESSED;var e=(this.assessment_objects||[])[0]||new a.AssessmentObject;if(!e.stix)return u.AssessmentEvalTypeEnum.UNASSESSED;var t=u.AssessmentEvalTypeEnum.UNKNOWN_TYPE;switch(e.stix.type){case"course-of-action":t=u.AssessmentEvalTypeEnum.MITIGATIONS;break;case"indicator":t=u.AssessmentEvalTypeEnum.INDICATORS;break;case"x-unfetter-sensor":t=u.AssessmentEvalTypeEnum.SENSORS;break;case"x-unfetter-object-assessment":t=u.AssessmentEvalTypeEnum.CAPABILITIES;break;default:t=u.AssessmentEvalTypeEnum.UNKNOWN_TYPE}return t},t}(s.ExpandedStix)},bLak:function(e,t,n){"use strict";var i=n("mrSG").__extends;Object.defineProperty(t,"__esModule",{value:!0});var s=n("piJo"),r=n("D7lm");t.CourseOfAction=function(e){function t(t){var n=e.call(this,t)||this;return n.type=r.StixCoreEnum.COURSE_OF_ACTION,n}return i(t,e),t}(s.StixExpanded)},cc7B:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.ARTICLE="x-unfetter-article",e.ASSESSED_OBJECT="x-unfetter-assessed-object",e.ASSESSMENT="x-unfetter-assessment",e.ASSESSMENT_GROUP="x-unfetter-assessment-group",e.ASSESSMENT_SET="x-unfetter-assessment-set",e.CAPABILITY="x-unfetter-capability",e.CATEGORY="x-unfetter-category",e.OBJECT_ASSESSMENT="x-unfetter-object-assessment",e.QUESTION="x-unfetter-question",e.SENSOR="x-unfetter-sensor",e.THREAT_BOARD="x-threat-board"}(t.StixEnum||(t.StixEnum={}))},eOoX:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("BmJK");t.AttackPattern=i.AttackPattern;var s=n("bLak");t.CourseOfAction=s.CourseOfAction;var r=n("gUYR");t.ExternalReference=r.ExternalReference;var a=n("N94G");t.GranularMarking=a.GranularMarking;var o=n("jOWW");t.Identity=o.Identity;var u=n("8hLa");t.Indicator=u.Indicator;var l=n("tCWa");t.IntrusionSet=l.IntrusionSet;var c=n("eetm");t.KillChainPhase=c.KillChainPhase;var d=n("Daao");t.KillChainEnum=d.KillChainEnum;var p=n("oszJ");t.Malware=p.Malware;var f=n("2E6l");t.MarkingDefinition=f.MarkingDefinition;var m=n("CV0t");t.Relationship=m.Relationship;var v=n("NcI2");t.Report=v.Report;var b=n("NdFd");t.StixCoreBundle=b.StixCoreBundle;var E=n("D7lm");t.StixCoreEnum=E.StixCoreEnum;var S=n("piJo");t.StixCore=S.StixCore},eetm:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.KillChainPhase=function(e,t){this.kill_chain_name=e,this.phase_name=t}},fFUH:function(e,t,n){"use strict";var i=n("mrSG").__extends;Object.defineProperty(t,"__esModule",{value:!0});var s=n("sGzu"),r=n("cc7B");t.ObjectAssessment=function(e){function t(t){var n=e.call(this,t)||this;return n.type=r.StixEnum.OBJECT_ASSESSMENT,n}return i(t,e),t}(s.ExpandedStix)},gUYR:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ExternalReference=function(){}},jOWW:function(e,t,n){"use strict";var i=n("mrSG").__extends;Object.defineProperty(t,"__esModule",{value:!0});var s=n("D7lm"),r=n("piJo");t.Identity=function(e){function t(t){var n=e.call(this,t)||this;return n.type=s.StixCoreEnum.IDENTITY,n}return i(t,e),t}(r.StixCore)},kZVK:function(e,t,n){"use strict";var i=n("mrSG").__extends;Object.defineProperty(t,"__esModule",{value:!0});var s=n("sGzu"),r=n("cc7B");t.Category=function(e){function t(t){var n=e.call(this,t)||this;return n.type=r.StixEnum.CATEGORY,n.assessed_objects=n.assessed_objects||[],n}return i(t,e),t}(s.ExpandedStix)},lUYK:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.SIGNIFICANT="S",e.MEDIUM="M",e.LOW="L",e.NOT_APPLICABLE="NA",e.UNANSWERED="",e.NONE="N"}(t.QuestionAnswerEnum||(t.QuestionAnswerEnum={}))},lsDG:function(e,t,n){"use strict";var i=n("mrSG").__extends;Object.defineProperty(t,"__esModule",{value:!0});var s=n("sGzu"),r=n("cc7B");t.Capability=function(e){function t(t){var n=e.call(this,t)||this;return n.type=r.StixEnum.CAPABILITY,n}return i(t,e),t}(s.ExpandedStix)},nZsJ:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("cc7B");t.AssessmentSet=function(){return function(){this.created=(new Date).toISOString(),this.type=i.StixEnum.ASSESSMENT_SET}}()},oszJ:function(e,t,n){"use strict";var i=n("mrSG").__extends;Object.defineProperty(t,"__esModule",{value:!0});var s=n("piJo"),r=n("D7lm");t.Malware=function(e){function t(t){var n=e.call(this,t)||this;return n.type=r.StixCoreEnum.MALWARE,n}return i(t,e),t}(s.StixExpanded)},pwuq:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AssessmentGroup=function(){return function(){this.created=(new Date).toISOString()}}()},sZoI:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("cc7B");t.AssessedObject=function(){return function(){this.type=i.StixEnum.ASSESSED_OBJECT,this.questions=this.questions||[]}}()},tCWa:function(e,t,n){"use strict";var i=n("mrSG").__extends;Object.defineProperty(t,"__esModule",{value:!0});var s=n("piJo"),r=n("D7lm");t.IntrusionSet=function(e){function t(t){var n=e.call(this,t)||this;return n.type=r.StixCoreEnum.INTRUSION_SET,n}return i(t,e),t}(s.StixExpanded)},z6jJ:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("sZoI");t.AssessedObject=i.AssessedObject;var s=n("pwuq");t.AssessmentGroup=s.AssessmentGroup;var r=n("nZsJ");t.AssessmentSet=r.AssessmentSet;var a=n("lsDG");t.Capability=a.Capability;var o=n("kZVK");t.Category=o.Category;var u=n("fFUH");t.ObjectAssessment=u.ObjectAssessment;var l=n("lUYK");t.QuestionAnswerEnum=l.QuestionAnswerEnum;var c=n("M8lA");t.Question=c.Question}}]);