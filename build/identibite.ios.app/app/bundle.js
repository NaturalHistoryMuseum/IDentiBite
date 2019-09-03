require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/App.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nativescript_ui_sidedrawer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-ui-sidedrawer/ui-sidedrawer.js");
/* harmony import */ var nativescript_ui_sidedrawer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_sidedrawer__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      transition: new nativescript_ui_sidedrawer__WEBPACK_IMPORTED_MODULE_0__["SlideInOnTopTransition"]()
    };
  }

});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/DrawerContent.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./shared/utils.js");
/* harmony import */ var _shared_selected_page_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./shared/selected-page-service.js");
/* harmony import */ var _shared_selected_page_service__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shared_selected_page_service__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      selectedPage: ""
    };
  },

  mounted() {
    _shared_selected_page_service__WEBPACK_IMPORTED_MODULE_1___default.a.getInstance().selectedPage$.subscribe(selectedPage => this.selectedPage = selectedPage);
  }

});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Header.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./shared/utils.js");
/* harmony import */ var tns_core_modules_ui_frame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/tns-core-modules/ui/frame/frame.js");
/* harmony import */ var tns_core_modules_ui_frame__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_frame__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["pageTitle"],
  methods: {
    onBackTap() {
      tns_core_modules_ui_frame__WEBPACK_IMPORTED_MODULE_1__["topmost"]().goBack();
    },

    onDrawerButtonTap() {
      _shared_utils__WEBPACK_IMPORTED_MODULE_0__["showDrawer"]();
    }

  }
});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/ListItem.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    fileName: {
      type: String
    },
    title: {
      type: String
    },
    subtitle: {
      type: String,
      default: ""
    }
  }
});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/ModalForm.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["character", "selectedState"],
  methods: {
    isStateSelected(stateID) {
      return this.selectedState == stateID;
    },

    selectState(stateID) {
      this.$modal.close(stateID);
    },

    removeCharacterState() {
      this.$modal.close(null);
    },

    closeModal() {
      this.$modal.close();
    }

  }
});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/ModalImage.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["title", "image"],
  methods: {
    closeModal() {
      this.$modal.close();
    }

  }
});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/SubHeader.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  computed: {
    hasDefaultSlot() {
      return !!this.$slots.default;
    }

  }
});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Warning.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["text"]
});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./pages/About.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {}
});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./pages/Explore.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_ListItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/ListItem.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  computed: {
    speciesList() {
      return this.$store.state.species;
    }

  },
  components: {
    ListItem: _components_ListItem__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  methods: {
    onSpeciesTap(event) {
      this.$goto("factSheet", {
        props: {
          name: event.item.scientific_name
        }
      });
    },

    getSpeciesGroups(species) {
      return species.group;
    },

    sortSpecies(speciesA, speciesB) {
      return speciesA.common_name > speciesB.common_name ? -1 : 1;
    }

  },

  mounted() {
    this.$updateSelectedPage("explore");
  }

});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./pages/FactSheet.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_ModalImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/ModalImage.vue");
/* harmony import */ var _components_Warning__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Warning.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["name"],
  components: {
    Warning: _components_Warning__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  computed: {
    species() {
      return this.$store.getters.getSpeciesByScientificName(this.name);
    }

  },
  methods: {
    showModalImage(title, image) {
      this.$showModal(_components_ModalImage__WEBPACK_IMPORTED_MODULE_0__["default"], {
        props: {
          title: title,
          image: image
        },
        fullscreen: true,
        animated: false,
        stretched: false,
        dimAmount: 0.5
      });
    }

  },

  mounted() {
    this.$updateSelectedPage("explore");
  }

});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./pages/Home.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./shared/utils.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  mounted() {
    this.$updateSelectedPage("home");
  },

  methods: {
    onDrawerButtonTap() {
      _shared_utils__WEBPACK_IMPORTED_MODULE_0__["showDrawer"]();
    }

  }
});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./pages/Identify.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_ModalForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/ModalForm.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function () {
    return {
      characterGroups: [{
        key: "symptoms",
        title: "Symptoms",
        help: "What symptoms do you have?"
      }, {
        key: "where",
        title: "Where",
        help: "Where did the bite happen?"
      }, {
        key: "when",
        title: "When?",
        help: "What time of day / frequency?"
      }, {
        key: "what",
        title: "What?",
        help: "What did the species look like?"
      }],
      selectedCharacterGroup: 0,
      characterStates: {}
    };
  },
  computed: {
    speciesList() {
      return this.$store.state.species.filter(this.filterSpeciesList);
    },

    characterStateCount() {
      return this.$store.getters.getCharactersStateCount;
    },

    selectedGroupKey() {
      return this.characterGroups[this.selectedCharacterGroup].key;
    },

    characterListByGroup() {
      return this.$store.state.characters.filter(function (character) {
        return character.group == this.selectedGroupKey;
      }.bind(this));
    },

    characterGroupHelp() {
      return this.characterGroups[this.selectedCharacterGroup].help;
    },

    currentPosibilitiesCount() {
      return this.speciesList.length;
    },

    releventCharacterIDs() {
      let relevantCharacters = [];
      let previousCharacterStates = {};
      this.speciesList.forEach(function (species) {
        for (const [id, states] of Object.entries(species.character_states)) {
          let characterID = Number(id); // Sort states and stringify to allow comparison with previous states

          let statesStr = states.sort().toString(); // If we already know this is a relevant character, skip it

          if (relevantCharacters.indexOf(characterID) !== -1) {
            continue;
          } else if (typeof previousCharacterStates[characterID] !== "undefined" && previousCharacterStates[characterID] != statesStr) {
            relevantCharacters.push(characterID);
          } // Store the number of character states selected, so it can
          // be compared to the next species in the list


          previousCharacterStates[characterID] = statesStr;
        }
      }.bind(this));
      return relevantCharacters;
    }

  },

  mounted() {
    this.$updateSelectedPage("identify");
  },

  methods: {
    onSpeciesTap(item) {
      this.$goto("factSheet", {
        props: {
          name: item.species.scientific_name
        }
      });
    },

    getCharacterSelectedStateValue(character) {
      let selectedStateID = this.characterStates[character.id];

      if (selectedStateID) {
        let selectedState = character.states.find(function (state) {
          return state.id == selectedStateID;
        });
        return selectedState.label;
      }
    },

    filterSpeciesList(species) {
      for (const [id, state] of Object.entries(this.characterStates)) {
        // If we have a state defined for this character AND
        // species has no entry OR
        // character states do not match the species, return false (hide species)
        if (state && (!species.character_states[id] || species.character_states[id].indexOf(state) == -1)) {
          return false;
        }
      }

      return true;
    },

    onResetButtonTap() {
      this.characterStates = {};
      this.refreshChacterList();
    },

    showModalForm(character) {
      if (this.isReleventCharacter(character)) {
        this.$showModal(_components_ModalForm__WEBPACK_IMPORTED_MODULE_0__["default"], {
          props: {
            character: character,
            selectedState: this.characterStates[character.id]
          },
          fullscreen: false,
          animated: true,
          stretched: true,
          dimAmount: 0.5
        }).then(function (selectedState) {
          // If undefined, user has cancelled the modal
          // If user has selected "remove", return value will be null
          if (typeof selectedState !== "undefined") {
            // Reactive update
            this.$set(this.characterStates, character.id, selectedState);
            this.refreshChacterList();
          }
        }.bind(this));
      }
    },

    refreshChacterList() {
      this.$refs.characterList.refresh();
    },

    isReleventCharacter(character) {
      if (this.characterStates[character.id]) {
        return true;
      }

      return this.releventCharacterIDs.indexOf(character.id) != -1;
    }

  }
});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./pages/Treatment.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_ListItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/ListItem.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  computed: {
    treatmentList() {
      return this.$store.getters.getTreatments;
    }

  },
  components: {
    ListItem: _components_ListItem__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  methods: {
    onTreatmentTap(event) {
      this.$goto("treatmentDetail", {
        props: {
          id: event.item.id
        }
      });
    }

  },

  mounted() {
    this.$updateSelectedPage("treatment");
  }

});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./pages/TreatmentDetail.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_ModalImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/ModalImage.vue");
/* harmony import */ var _components_Warning__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Warning.vue");
/* harmony import */ var _components_TreatmentReferences__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/TreatmentReferences.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["id"],
  components: {
    Warning: _components_Warning__WEBPACK_IMPORTED_MODULE_1__["default"],
    TreatmentReferences: _components_TreatmentReferences__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  computed: {
    treatment() {
      return this.$store.getters.getTreatmentByID(this.id);
    }

  },
  methods: {
    showModalImage(title, image) {
      this.$showModal(_components_ModalImage__WEBPACK_IMPORTED_MODULE_0__["default"], {
        props: {
          title: title,
          image: image
        },
        fullscreen: true,
        animated: false,
        stretched: false,
        dimAmount: 0.5
      });
    },

    isTitle(text) {
      return text.split(" ").length == 1;
    }

  },

  mounted() {
    this.$updateSelectedPage("treatment");
  }

});

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/lib/loader.js!../node_modules/vue-loader/lib/index.js?!./components/DrawerContent.vue?vue&type=style&index=0&id=38f02606&scoped=true&lang=scss&":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/**\r\n * Convenient single import for light variables\r\n * Includes base variables with light overrides\r\n **/\n/**\r\n * Light variable overrides\r\n **/\n/**\n * Theme variables overrides\n**/\n.sidedrawer.sidedrawer-left[data-v-38f02606] {\n  background-color: #EE0510;\n  padding: 0;\n}\n.sidedrawer .sidedrawer-header[data-v-38f02606] {\n  background: #EE0510;\n  border-bottom-color: #CB0000;\n  border-bottom-width: 3;\n  color: #fff;\n  padding-left: 10;\n  font-size: 22;\n  padding: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n  font-size: 22;\n  margin-bottom: 0;\n  height: 46;\n}\n.sidedrawer .sidedrawer-content[data-v-38f02606] {\n  background-color: #FFFFFF;\n}\n.sidedrawer .sidedrawer-list-item[data-v-38f02606] {\n  padding-left: 10;\n}\n.sidedrawer .sidedrawer-list-item label[data-v-38f02606] {\n    vertical-align: center;\n    color: #403e3e;\n}\n.sidedrawer .sidedrawer-list-item .fa[data-v-38f02606] {\n    margin-right: 10;\n    font-size: 20;\n}\n.sidedrawer .sidedrawer-list-item.selected[data-v-38f02606] {\n    background-color: #F8F8F8;\n}\n.sidedrawer .sidedrawer-list-item.selected label[data-v-38f02606] {\n      color: #EE0510;\n}\n", ""]);


    const application = __webpack_require__("../node_modules/tns-core-modules/application/application.js");
    __webpack_require__("../node_modules/tns-core-modules/ui/styling/style-scope.js");

    exports.forEach(cssExport => {
        if (cssExport.length > 1 && cssExport[1]) {
            // applying the second item of the export as it contains the css contents
            application.addCss(cssExport[1]);
        }
    });
    ;
    if (false) {}


/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/lib/loader.js!../node_modules/vue-loader/lib/index.js?!./components/ListItem.vue?vue&type=style&index=0&id=30a598ac&lang=scss&scoped=true&":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/**\r\n * Convenient single import for light variables\r\n * Includes base variables with light overrides\r\n **/\n/**\r\n * Light variable overrides\r\n **/\n/**\n * Theme variables overrides\n**/\n.list-item .list-item-image[data-v-30a598ac],\n.list-item .list-item-label[data-v-30a598ac] {\n  border-bottom-width: 1;\n}\n.list-item .list-item-image[data-v-30a598ac] {\n  border-color: #fff;\n}\n.list-item .list-item-label[data-v-30a598ac] {\n  padding-left: 30px;\n  border-color: #F1EFF0;\n}\n", ""]);


    const application = __webpack_require__("../node_modules/tns-core-modules/application/application.js");
    __webpack_require__("../node_modules/tns-core-modules/ui/styling/style-scope.js");

    exports.forEach(cssExport => {
        if (cssExport.length > 1 && cssExport[1]) {
            // applying the second item of the export as it contains the css contents
            application.addCss(cssExport[1]);
        }
    });
    ;
    if (false) {}


/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/lib/loader.js!../node_modules/vue-loader/lib/index.js?!./components/ModalForm.vue?vue&type=style&index=0&id=44b97c74&lang=scss&scoped=true&":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/**\r\n * Convenient single import for light variables\r\n * Includes base variables with light overrides\r\n **/\n/**\r\n * Light variable overrides\r\n **/\n/**\n * Theme variables overrides\n**/\n.modal-container[data-v-44b97c74] {\n  padding: 25;\n  padding-bottom: 10;\n}\n.modal-container .modal[data-v-44b97c74] {\n    font-size: 14;\n    margin-top: 35;\n    border-radius: 4;\n    background-color: #fff;\n    width: auto;\n}\n.modal-container .modal .modal-header[data-v-44b97c74] {\n      background: #EE0510;\n      border-bottom-color: #CB0000;\n      border-bottom-width: 3;\n      color: #fff;\n      padding-left: 10;\n      font-size: 22;\n      font-size: 18;\n}\n.modal-container .modal .modal-form-item[data-v-44b97c74] {\n      margin-top: 5;\n      margin-bottom: 5;\n      vertical-align: middle;\n      text-align: left;\n}\n.modal-container .modal .modal-form-item button[data-v-44b97c74] {\n        font-size: 14;\n        color: #403e3e;\n        margin: 0;\n        padding: 0;\n}\n.modal-container .modal .modal-form-item button.fa[data-v-44b97c74] {\n          font-size: 30;\n}\n", ""]);


    const application = __webpack_require__("../node_modules/tns-core-modules/application/application.js");
    __webpack_require__("../node_modules/tns-core-modules/ui/styling/style-scope.js");

    exports.forEach(cssExport => {
        if (cssExport.length > 1 && cssExport[1]) {
            // applying the second item of the export as it contains the css contents
            application.addCss(cssExport[1]);
        }
    });
    ;
    if (false) {}


/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/lib/loader.js!../node_modules/vue-loader/lib/index.js?!./components/ModalImage.vue?vue&type=style&index=0&id=392f3f49&lang=scss&scoped=true&":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".modal-container[data-v-392f3f49] {\n  padding: 0;\n  padding-bottom: 0;\n}\n.modal-container .modal[data-v-392f3f49] {\n    margin: 0;\n    margin-top: 0;\n    border-radius: 0;\n    padding: 0;\n    background-color: #000;\n}\n.modal-container .modal label[data-v-392f3f49] {\n      color: #fff;\n      padding: 30px;\n      background-color: rgba(0, 0, 0, 0.5);\n}\n.modal-container .modal button[data-v-392f3f49] {\n      margin-right: 30px;\n      color: #fff;\n}\n", ""]);


    const application = __webpack_require__("../node_modules/tns-core-modules/application/application.js");
    __webpack_require__("../node_modules/tns-core-modules/ui/styling/style-scope.js");

    exports.forEach(cssExport => {
        if (cssExport.length > 1 && cssExport[1]) {
            // applying the second item of the export as it contains the css contents
            application.addCss(cssExport[1]);
        }
    });
    ;
    if (false) {}


/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/lib/loader.js!../node_modules/vue-loader/lib/index.js?!./components/SubHeader.vue?vue&type=style&index=0&id=28fd73a2&lang=scss&scoped=true&":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/**\r\n * Convenient single import for light variables\r\n * Includes base variables with light overrides\r\n **/\n/**\r\n * Light variable overrides\r\n **/\n/**\n * Theme variables overrides\n**/\n.subheader[data-v-28fd73a2] {\n  background: #CB0000;\n  color: #fff;\n  padding-left: 10;\n  padding-right: 10;\n}\n", ""]);


    const application = __webpack_require__("../node_modules/tns-core-modules/application/application.js");
    __webpack_require__("../node_modules/tns-core-modules/ui/styling/style-scope.js");

    exports.forEach(cssExport => {
        if (cssExport.length > 1 && cssExport[1]) {
            // applying the second item of the export as it contains the css contents
            application.addCss(cssExport[1]);
        }
    });
    ;
    if (false) {}


/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/lib/loader.js!../node_modules/vue-loader/lib/index.js?!./components/Warning.vue?vue&type=style&index=0&id=4f8b4bde&lang=scss&scoped=true&":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/**\r\n * Convenient single import for light variables\r\n * Includes base variables with light overrides\r\n **/\n/**\r\n * Light variable overrides\r\n **/\n/**\n * Theme variables overrides\n**/\nlabel[data-v-4f8b4bde] {\n  color: #EE0510;\n  font-size: 14;\n}\nlabel.fa[data-v-4f8b4bde] {\n  font-size: 30;\n}\n", ""]);


    const application = __webpack_require__("../node_modules/tns-core-modules/application/application.js");
    __webpack_require__("../node_modules/tns-core-modules/ui/styling/style-scope.js");

    exports.forEach(cssExport => {
        if (cssExport.length > 1 && cssExport[1]) {
            // applying the second item of the export as it contains the css contents
            application.addCss(cssExport[1]);
        }
    });
    ;
    if (false) {}


/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/lib/loader.js!../node_modules/vue-loader/lib/index.js?!./pages/About.vue?vue&type=style&index=0&id=fc5aff78&lang=scss&scoped=true&":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "", ""]);


    const application = __webpack_require__("../node_modules/tns-core-modules/application/application.js");
    __webpack_require__("../node_modules/tns-core-modules/ui/styling/style-scope.js");

    exports.forEach(cssExport => {
        if (cssExport.length > 1 && cssExport[1]) {
            // applying the second item of the export as it contains the css contents
            application.addCss(cssExport[1]);
        }
    });
    ;
    if (false) {}


/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/lib/loader.js!../node_modules/vue-loader/lib/index.js?!./pages/Explore.vue?vue&type=style&index=0&id=00eab88a&scoped=true&lang=scss&":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/**\r\n * Convenient single import for light variables\r\n * Includes base variables with light overrides\r\n **/\n/**\r\n * Light variable overrides\r\n **/\n/**\n * Theme variables overrides\n**/\n.list-view[data-v-00eab88a] {\n  background-color: #F1EFF0;\n}\n.list-view .list-group-item[data-v-00eab88a] {\n    background-color: #fff;\n}\n", ""]);


    const application = __webpack_require__("../node_modules/tns-core-modules/application/application.js");
    __webpack_require__("../node_modules/tns-core-modules/ui/styling/style-scope.js");

    exports.forEach(cssExport => {
        if (cssExport.length > 1 && cssExport[1]) {
            // applying the second item of the export as it contains the css contents
            application.addCss(cssExport[1]);
        }
    });
    ;
    if (false) {}


/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/lib/loader.js!../node_modules/vue-loader/lib/index.js?!./pages/FactSheet.vue?vue&type=style&index=0&id=4e9e46ec&scoped=true&lang=scss&":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".species-genus label[data-v-4e9e46ec] {\n  vertical-align: middle;\n}\n", ""]);


    const application = __webpack_require__("../node_modules/tns-core-modules/application/application.js");
    __webpack_require__("../node_modules/tns-core-modules/ui/styling/style-scope.js");

    exports.forEach(cssExport => {
        if (cssExport.length > 1 && cssExport[1]) {
            // applying the second item of the export as it contains the css contents
            application.addCss(cssExport[1]);
        }
    });
    ;
    if (false) {}


/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/lib/loader.js!../node_modules/vue-loader/lib/index.js?!./pages/Home.vue?vue&type=style&index=0&id=7f245110&scoped=true&lang=scss&":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/**\r\n * Convenient single import for light variables\r\n * Includes base variables with light overrides\r\n **/\n/**\r\n * Light variable overrides\r\n **/\n/**\n * Theme variables overrides\n**/\n.page-icon-red[data-v-7f245110] {\n  margin-right: 10;\n  font-size: 26;\n}\nlabel.h1[data-v-7f245110] {\n  color: #EE0510;\n  margin-top: 20;\n  margin-bottom: 40;\n}\n#logo[data-v-7f245110] {\n  margin-bottom: 50;\n}\n.btn[data-v-7f245110] {\n  margin: 10;\n  width: 220;\n}\n.btn .fa[data-v-7f245110] {\n    font-size: 28;\n    padding-left: 10;\n}\n.btn .label[data-v-7f245110] {\n    padding-left: 10;\n    text-align: center;\n    padding-right: 40;\n    font-size: 18;\n}\n", ""]);


    const application = __webpack_require__("../node_modules/tns-core-modules/application/application.js");
    __webpack_require__("../node_modules/tns-core-modules/ui/styling/style-scope.js");

    exports.forEach(cssExport => {
        if (cssExport.length > 1 && cssExport[1]) {
            // applying the second item of the export as it contains the css contents
            application.addCss(cssExport[1]);
        }
    });
    ;
    if (false) {}


/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/lib/loader.js!../node_modules/vue-loader/lib/index.js?!./pages/Identify.vue?vue&type=style&index=0&id=73b8caa5&lang=scss&scoped=true&":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/**\r\n * Convenient single import for light variables\r\n * Includes base variables with light overrides\r\n **/\n/**\r\n * Light variable overrides\r\n **/\n/**\n * Theme variables overrides\n**/\n.character-list .character-label[data-v-73b8caa5] {\n  margin-left: 10;\n  padding-top: 4;\n  padding-bottom: 4;\n  padding-right: 10;\n}\n.character-list .character-state[data-v-73b8caa5] {\n  background-color: #F1EFF0;\n  border-radius: 5;\n  padding-left: 10;\n  padding-right: 10;\n  margin: 4;\n  margin-right: 10;\n  vertical-align: middle;\n}\n.character-list .character-state label.fa[data-v-73b8caa5] {\n    font-size: 14;\n}\n.character-list .disabled .character-state[data-v-73b8caa5] {\n  opacity: 0.4;\n}\n.character-list .disabled .character-label[data-v-73b8caa5] {\n  color: #a6a4a4;\n}\n.identify-results[data-v-73b8caa5] {\n  background: #F1EFF0;\n}\n.identify-results .current-possibilities-count[data-v-73b8caa5] {\n    background-color: white;\n    border-radius: 5;\n    margin-left: 10;\n    padding: 2;\n}\n.identify-results .identify-results-item[data-v-73b8caa5] {\n    margin-right: 2;\n    background-color: #fff;\n}\n.identify-results .identify-results-item label[data-v-73b8caa5] {\n      padding-left: 10;\n      padding-right: 10;\n}\n", ""]);


    const application = __webpack_require__("../node_modules/tns-core-modules/application/application.js");
    __webpack_require__("../node_modules/tns-core-modules/ui/styling/style-scope.js");

    exports.forEach(cssExport => {
        if (cssExport.length > 1 && cssExport[1]) {
            // applying the second item of the export as it contains the css contents
            application.addCss(cssExport[1]);
        }
    });
    ;
    if (false) {}


/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/App.vue?vue&type=style&index=0&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);


    const application = __webpack_require__("../node_modules/tns-core-modules/application/application.js");
    __webpack_require__("../node_modules/tns-core-modules/ui/styling/style-scope.js");

    exports.forEach(cssExport => {
        if (cssExport.length > 1 && cssExport[1]) {
            // applying the second item of the export as it contains the css contents
            application.addCss(cssExport[1]);
        }
    });
    ;
    if (false) {}


/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/App.vue?vue&type=template&id=45ba5ed4&lang=html&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "RadSideDrawer",
    {
      ref: "drawer",
      attrs: {
        drawerLocation: "Left",
        gesturesEnabled: "true",
        drawerTransition: _vm.transition
      }
    },
    [
      _c(
        "StackLayout",
        {
          directives: [
            {
              name: "view",
              rawName: "v-view:drawerContent",
              arg: "drawerContent",
              modifiers: {}
            }
          ],
          attrs: { backgroundColor: "#ffffff" }
        },
        [_vm._t("drawerContent")],
        2
      ),
      _c(
        "Frame",
        {
          directives: [
            {
              name: "view",
              rawName: "v-view:mainContent",
              arg: "mainContent",
              modifiers: {}
            }
          ],
          ref: "drawerMainContent"
        },
        [_vm._t("mainContent")],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/DrawerContent.vue?vue&type=template&id=38f02606&scoped=true&lang=html&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "StackLayout",
    { staticClass: "sidedrawer sidedrawer-left", attrs: { rows: "auto, *" } },
    [
      _c("Label", {
        staticClass: "sidedrawer-header",
        attrs: {
          id: "sidedrawer-header",
          text: "IDentiBite",
          verticalAlignment: "middle"
        }
      }),
      _c(
        "ScrollView",
        { staticClass: "sidedrawer-content", attrs: { row: "1" } },
        [
          _c(
            "StackLayout",
            [
              _c(
                "GridLayout",
                {
                  class:
                    "sidedrawer-list-item" +
                    (_vm.selectedPage === "home" ? " selected" : ""),
                  attrs: { columns: "auto, *" },
                  on: {
                    tap: function($event) {
                      return _vm.$goto("home")
                    }
                  }
                },
                [
                  _c("Label", {
                    staticClass: "fa",
                    attrs: { col: "0", "text.decode": "&#xf015;" }
                  }),
                  _c("Label", { attrs: { col: "1", text: "Home" } })
                ],
                1
              ),
              _c(
                "GridLayout",
                {
                  class:
                    "sidedrawer-list-item" +
                    (_vm.selectedPage === "identify" ? " selected" : ""),
                  attrs: { columns: "auto, *" },
                  on: {
                    tap: function($event) {
                      return _vm.$goto("identify")
                    }
                  }
                },
                [
                  _c("Label", {
                    staticClass: "fa",
                    attrs: { col: "0", "text.decode": "&#xf002;" }
                  }),
                  _c("Label", { attrs: { col: "1", text: "Identify" } })
                ],
                1
              ),
              _c(
                "GridLayout",
                {
                  class:
                    "sidedrawer-list-item" +
                    (_vm.selectedPage === "explore" ? " selected" : ""),
                  attrs: { columns: "auto, *" },
                  on: {
                    tap: function($event) {
                      return _vm.$goto("explore")
                    }
                  }
                },
                [
                  _c("Label", {
                    staticClass: "fa",
                    attrs: { col: "0", "text.decode": "&#xf188;" }
                  }),
                  _c("Label", { attrs: { col: "1", text: "Explore" } })
                ],
                1
              ),
              _c(
                "GridLayout",
                {
                  class:
                    "sidedrawer-list-item" +
                    (_vm.selectedPage === "treatment" ? " selected" : ""),
                  attrs: { columns: "auto, *" },
                  on: {
                    tap: function($event) {
                      return _vm.$goto("treatment")
                    }
                  }
                },
                [
                  _c("Label", {
                    staticClass: "fa",
                    attrs: { col: "0", "text.decode": "&#xf21e;" }
                  }),
                  _c("Label", { attrs: { col: "1", text: "Treatment" } })
                ],
                1
              ),
              _c("StackLayout", { staticClass: "hr-light" }),
              _c(
                "GridLayout",
                {
                  class:
                    "sidedrawer-list-item" +
                    (_vm.selectedPage === "about" ? " selected" : ""),
                  attrs: { columns: "auto, *" },
                  on: {
                    tap: function($event) {
                      return _vm.$goto("about")
                    }
                  }
                },
                [
                  _c("Label", {
                    staticClass: "fa",
                    attrs: { col: "0", "text.decode": "&#xf05a;" }
                  }),
                  _c("Label", { attrs: { col: "1", text: "About" } })
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Header.vue?vue&type=template&id=1a9bb128&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "ActionBar",
    { staticClass: "action-bar", attrs: { flat: "true" } },
    [
      _c("NavigationButton", {
        attrs: { icon: "res://back", "ios.position": "left" },
        on: { tap: _vm.onBackTap }
      }),
      _c(
        "ActionItem",
        {
          attrs: { "ios.position": "right", height: "50" },
          on: { tap: _vm.onDrawerButtonTap }
        },
        [
          _c("Label", {
            staticClass: "fa",
            attrs: { "text.decode": "&#xf0c9;" }
          })
        ],
        1
      ),
      _c("Label", {
        staticClass: "action-bar-title",
        attrs: { text: _vm.pageTitle }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/ListItem.vue?vue&type=template&id=30a598ac&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "GridLayout",
    { staticClass: "list-item", attrs: { columns: "120, *" } },
    [
      _c("Image", {
        staticClass: "list-item-image",
        attrs: {
          height: "85",
          width: "120",
          col: "0",
          src: _vm._f("imageAssetPath")(_vm.fileName),
          stretch: "aspectFill"
        }
      }),
      _c(
        "StackLayout",
        {
          staticClass: "list-item-label",
          attrs: { col: "1", verticalAlignment: "middle", height: "85" }
        },
        [
          _c("Label", { attrs: { text: _vm.title } }),
          _vm.subtitle
            ? _c("Label", {
                staticClass: "text-muted text-italic",
                attrs: { text: _vm.subtitle }
              })
            : _vm._e()
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/ModalForm.vue?vue&type=template&id=44b97c74&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "ModalStack",
    { staticClass: "modal-container", attrs: { dismissEnabled: "true" } },
    [
      _c(
        "StackLayout",
        { staticClass: "modal" },
        [
          _c(
            "GridLayout",
            {
              staticClass: "modal-header",
              attrs: { columns: "*, 50", height: "60", width: "100%" }
            },
            [
              _c("Label", {
                attrs: {
                  col: "0",
                  text: _vm.character.label,
                  textWrap: "true",
                  verticalAlignment: "middle"
                }
              }),
              _c("Button", {
                staticClass: "fa page-icon",
                attrs: {
                  col: "1",
                  "text.decode": "&#xf00d;",
                  verticalAlignment: "middle",
                  width: "50"
                },
                on: { tap: _vm.closeModal }
              })
            ],
            1
          ),
          _vm._l(_vm.character.states, function(state) {
            return _c(
              "GridLayout",
              {
                key: state.id,
                staticClass: "modal-form-item",
                attrs: { columns: "*, 40", height: "40", width: "70%" }
              },
              [
                _c("Button", {
                  staticClass: "page-icon",
                  attrs: { text: state.label },
                  on: {
                    tap: function($event) {
                      return _vm.selectState(state.id)
                    }
                  }
                }),
                _vm.isStateSelected(state.id)
                  ? _c("Button", {
                      staticClass: "fa page-icon",
                      attrs: {
                        col: "1",
                        "text.decode": "&#xf111;",
                        textAlign: "left"
                      },
                      on: {
                        tap: function($event) {
                          return _vm.selectState(state.id)
                        }
                      }
                    })
                  : _c("Button", {
                      staticClass: "fa page-icon",
                      attrs: { col: "1", "text.decode": "&#xf10c;" },
                      on: {
                        tap: function($event) {
                          return _vm.selectState(state.id)
                        }
                      }
                    })
              ],
              1
            )
          }),
          _c("Button", {
            staticClass: "btn btn-grey m-t-15 m-b-15",
            attrs: { text: "Remove this filter" },
            on: { tap: _vm.removeCharacterState }
          })
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/ModalImage.vue?vue&type=template&id=392f3f49&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "ModalStack",
    {
      staticClass: "modal-container",
      attrs: {
        dismissEnabled: "true",
        verticalPosition: "top",
        horizontalPosition: "left"
      }
    },
    [
      _c(
        "GridLayout",
        {
          staticClass: "modal",
          attrs: {
            columns: "*, 60",
            rows: "50,*,auto",
            width: "100%",
            height: "100%"
          }
        },
        [
          _c("Image", {
            attrs: {
              src: _vm._f("imageAssetPath")(_vm.image.file),
              rowSpan: "3",
              colSpan: "2"
            }
          }),
          _c("Label", {
            attrs: { text: _vm.title, textWrap: "true", row: "0", col: "0" }
          }),
          _c("Button", {
            staticClass: "fa page-icon pull-right",
            attrs: { row: "0", col: "1", "text.decode": "&#xf00d;" },
            on: { tap: _vm.closeModal }
          }),
          _c("Label", {
            staticClass: "footnote",
            attrs: {
              text: _vm.image.credit,
              textWrap: "true",
              row: "2",
              colSpan: "2"
            }
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/SubHeader.vue?vue&type=template&id=28fd73a2&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "StackLayout",
    {
      staticClass: "subheader",
      class: { "subheader-has-content": _vm.hasDefaultSlot },
      attrs: { minHeight: "3" }
    },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/TreatmentReferences.vue?vue&type=template&id=02a72e15&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "StackLayout",
    [
      _c("Label", {
        staticClass: "h2",
        attrs: { text: "References", textWrap: "true" }
      }),
      _c("Label", {
        staticClass: "body",
        attrs: {
          textWrap: "true",
          text:
            "DTB (2012) Management of simple insect bites: where's the evidence?. Drug and therapeutics bulletin. 50(4), 45-48."
        }
      }),
      _c("Label", {
        staticClass: "body",
        attrs: {
          textWrap: "true",
          text:
            "Elliot, A., Cross, K., Smith G. and et al. (2006) The association between impetigo, insect bites and air temperature: a retrospective 5-year study (1999-2003) using morbidity data collected from a sentinel general practice network database.Family practice. 23(5), 490-496"
        }
      }),
      _c("Label", {
        staticClass: "body",
        attrs: {
          textWrap: "true",
          text:
            "Golden, D., Moffitt, J., Nicklas, R. and et al. (2011) Stinging insect hypersensitivity: a practice parameter update 2011.Journal of Allergy and Clinical Immunology. 127(4), 852-854"
        }
      }),
      _c("Label", {
        staticClass: "body",
        attrs: {
          textWrap: "true",
          text:
            "Järvinen KM (2009)Allergic reactions to stinging and biting insects and arachnids. Pediatr Ann 2009; 38: 199–209"
        }
      }),
      _c("Label", {
        staticClass: "body",
        attrs: {
          textWrap: "true",
          text:
            "Juckett, G. (2013) Arthropod bites. American Family Physician. 88(12), 841-847"
        }
      }),
      _c("Label", {
        staticClass: "body",
        attrs: {
          textWrap: "true",
          text:
            "Larry I. Goodyer, Ashley M. Croft, Steve P. Frances, Nigel Hill, Sarah J. Moore, Sangoro P. Onyango, Mustapha Debboun, Expert Review of the Evidence Base for Arthropod Bite Avoidance, Journal of Travel Medicine, Volume 17, Issue 3, 1 May 2010, Pages 182–192"
        }
      }),
      _c("Label", {
        staticClass: "body",
        attrs: {
          textWrap: "true",
          text:
            "NICE (2011) Anaphylaxis: assessment and referral after emergency treatment. CG134.  National Institute for Health and Care Excellence.. www.nice.org.uk"
        }
      }),
      _c("Label", {
        staticClass: "body",
        attrs: {
          textWrap: "true",
          text:
            "Przybilla, B. and and Rueff, F. (2012) Insect stings: clinical features and management. Deutsches Arzteblatt international.109(13), 238-248"
        }
      }),
      _c("Label", {
        staticClass: "body",
        attrs: {
          textWrap: "true",
          text:
            "Working Group of the Resuscitation Council (UK) (2008)  Emergency treatment of anaphylactic reactions: guidelines for healthcare providers. Resuscitation Council (UK).. www.resus.org.uk"
        }
      }),
      _c("Label", {
        staticClass: "body",
        attrs: {
          textWrap: "true",
          text:
            "Goddard, J., & Zhou, L. (2007). Physician’s Guide to Arthropods of Medical Importance, 5th Edition. Emerging Infectious Diseases, 13(9), 1442. doi:10.3201/eid1309.070706"
        }
      }),
      _c("Label", {
        staticClass: "body",
        attrs: {
          textWrap: "true",
          text: "https://www.nhs.uk/conditions/insect-bites-and-stings/"
        }
      }),
      _c("Label", {
        staticClass: "body",
        attrs: {
          textWrap: "true",
          text: "https://cks.nice.org.uk/insect-bites-and-stings#!topicSummary"
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Warning.vue?vue&type=template&id=4f8b4bde&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "StackLayout",
    { staticClass: "m-t-15 m-b-15 body", attrs: { orientation: "horizontal" } },
    [
      _c("Label", {
        staticClass: "fa",
        attrs: { "text.decode": "&#xf06a;", width: "35" }
      }),
      _c("Label", { attrs: { text: _vm.text, textWrap: "true" } })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./pages/About.vue?vue&type=template&id=fc5aff78&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    { staticClass: "page" },
    [
      _c("Header", { attrs: { "page-title": "About" } }),
      _c(
        "ScrollView",
        [
          _c(
            "StackLayout",
            [
              _c("Label", {
                staticClass: "body",
                attrs: {
                  textWrap: "true",
                  text:
                    "IDentiBite is an app designed to help members of the public and healthcare professionals identify commonly encountered arthropods that bite and sting people in the UK and contains general medical information regarding common bites and stings suffered in the UK. The app has been designed to be a source of information but is not intended as a substitute for professional medical advice, first aid training and/or techniques. To seek medical attention please dial 999 immediately or visit your nearest health care provider. "
                }
              }),
              _c("Label", {
                staticClass: "h2",
                attrs: { textWrap: "true", text: "How to use it?" }
              }),
              _c("Label", {
                staticClass: "body",
                attrs: {
                  textWrap: "true",
                  text:
                    "The app can be used in three main ways. The first link on the homepage leads you to a number of questions that can be answered regarding the offending arthropod, questions about the bite or sting itself, when the bite and sting happened and where it happened. As questions are completed the number of likely arthropods that may have been involved will reduce and shown on the screen. The more questions that are answered the more likely the app will help identify the culprit. As many or as few questions can be answered as is desired. Likely arthropods can be clicked on at any time during this process to access information about the arthropod and its bite or sting."
                }
              }),
              _c("Label", {
                staticClass: "body",
                attrs: {
                  textWrap: "true",
                  text:
                    "The second link leads to an alphabetical list of arthropods that can be clicked on to access information regarding the arthropod and its bite or sting."
                }
              }),
              _c("Label", {
                staticClass: "body",
                attrs: {
                  textWrap: "true",
                  text:
                    "The third link leads to common medical treatments as listed by the NHS and NICE regarding bites and stings in the UK."
                }
              }),
              _c("Label", {
                staticClass: "body",
                attrs: {
                  textWrap: "true",
                  text:
                    "At any point you can return to the homepage by clicking the link in the corner of the screen."
                }
              }),
              _c("Label", {
                staticClass: "h2",
                attrs: { textWrap: "true", text: "Who can use the app?" }
              }),
              _c("Label", {
                staticClass: "body",
                attrs: {
                  textWrap: "true",
                  text:
                    "We hope everyone will find the app informative, as it does not require specialist entomology knowledge to use. It also does not matter if you are a medical professional or a member of the public this app is for anyone with an interest in UK arthropods and their bites and stings."
                }
              }),
              _c("Label", {
                staticClass: "h2",
                attrs: { textWrap: "true", text: "App Development" }
              }),
              _c("Label", {
                staticClass: "body",
                attrs: {
                  textWrap: "true",
                  text:
                    "Dr Alex Kew, Dr Vince Smith, Ben Scott and the Natural History Museum, London, have developed this application. For any suggestions, feedback or enquiries please contact the Natural History Museum, London. www.nhm.ac.uk"
                }
              }),
              _c("Label", {
                staticClass: "h2",
                attrs: {
                  textWrap: "true",
                  text: "Medical information disclaimer"
                }
              }),
              _c("Label", {
                staticClass: "m-b-10 m-t-10 m-l-10 font-weight-bold",
                attrs: { textWrap: "true", text: "1. Credit" }
              }),
              _c("Label", {
                staticClass: "m-l-20 m-b-10",
                attrs: {
                  textWrap: "true",
                  text:
                    "1.1 This document was created using a template from SEQ Legal (https://seqlegal.com)."
                }
              }),
              _c("Label", {
                staticClass: "m-b-10 m-l-10 font-weight-bold",
                attrs: { textWrap: "true", text: "2. No advice" }
              }),
              _c("Label", {
                staticClass: "m-l-20 m-b-10",
                attrs: {
                  textWrap: "true",
                  text:
                    "2.1 Our application contains general medical information."
                }
              }),
              _c("Label", {
                staticClass: "m-l-20 m-b-10",
                attrs: {
                  textWrap: "true",
                  text:
                    "2.2 The medical information is not advice and should not be treated as such."
                }
              }),
              _c("Label", {
                staticClass: "m-b-10 m-l-10 font-weight-bold",
                attrs: { textWrap: "true", text: "3. No warranties" }
              }),
              _c("Label", {
                staticClass: "m-l-20 m-b-10",
                attrs: {
                  textWrap: "true",
                  text:
                    "3.1 The medical information on our application is provided without any representations or warranties, express or implied."
                }
              }),
              _c("Label", {
                staticClass: "m-l-20 m-b-10",
                attrs: {
                  textWrap: "true",
                  text:
                    "3.2 Without limiting the scope of Section 3.1, we do not warrant or represent that the medical information on this website:"
                }
              }),
              _c("Label", {
                staticClass: "m-l-30 m-b-10",
                attrs: {
                  textWrap: "true",
                  text:
                    "(a) will be constantly available, or available at all; or"
                }
              }),
              _c("Label", {
                staticClass: "m-l-30 m-b-10",
                attrs: {
                  textWrap: "true",
                  text:
                    "(b) is true, accurate, complete, current or non-misleading."
                }
              }),
              _c("Label", {
                staticClass: "m-b-10 m-l-10 font-weight-bold",
                attrs: { textWrap: "true", text: "4. Medical assistance" }
              }),
              _c("Label", {
                staticClass: "m-l-20 m-b-10",
                attrs: {
                  textWrap: "true",
                  text:
                    "4.1 You must not rely on the information on our application as an alternative to medical advice from your doctor or other professional healthcare provider."
                }
              }),
              _c("Label", {
                staticClass: "m-l-20 m-b-10",
                attrs: {
                  textWrap: "true",
                  text:
                    "4.2 If you have any specific questions about any medical matter, you should consult your doctor or other professional healthcare provider."
                }
              }),
              _c("Label", {
                staticClass: "m-l-20 m-b-10",
                attrs: {
                  textWrap: "true",
                  text:
                    "4.3 If you think you may be suffering from any medical condition, you should seek immediate medical attention."
                }
              }),
              _c("Label", {
                staticClass: "m-l-20 m-b-10",
                attrs: {
                  textWrap: "true",
                  text:
                    "4.4 You should never delay seeking medical advice, disregard medical advice or discontinue medical treatment because of information on our website. "
                }
              }),
              _c("Label", {
                staticClass: "m-b-10 m-l-10 font-weight-bold",
                attrs: { textWrap: "true", text: "5. Interactive features" }
              }),
              _c("Label", {
                staticClass: "m-l-20 m-b-10",
                attrs: {
                  textWrap: "true",
                  text:
                    "5.1 Our application does not include interactive features that allow users to communicate with us."
                }
              }),
              _c("Label", {
                staticClass: "m-b-10 m-l-10 font-weight-bold",
                attrs: {
                  textWrap: "true",
                  text: "6. Limits upon exclusions of liability"
                }
              }),
              _c("Label", {
                staticClass: "m-l-20 m-b-10",
                attrs: {
                  textWrap: "true",
                  text: "6.1 Nothing in this disclaimer will:"
                }
              }),
              _c("Label", {
                staticClass: "m-l-30 m-b-10",
                attrs: {
                  textWrap: "true",
                  text:
                    "(a) limit or exclude any liability for death or personal injury resulting from negligence;"
                }
              }),
              _c("Label", {
                staticClass: "m-l-30 m-b-10",
                attrs: {
                  textWrap: "true",
                  text:
                    "(b) limit or exclude any liability for fraud or fraudulent misrepresentation;"
                }
              }),
              _c("Label", {
                staticClass: "m-l-30 m-b-10",
                attrs: {
                  textWrap: "true",
                  text:
                    "(c) limit any liabilities in any way that is not permitted under applicable law; or"
                }
              }),
              _c("Label", {
                staticClass: "m-l-30 m-b-10",
                attrs: {
                  textWrap: "true",
                  text:
                    "(d) exclude any liabilities that may not be excluded under applicable law."
                }
              })
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./pages/Explore.vue?vue&type=template&id=00eab88a&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    { staticClass: "page" },
    [
      _c("Header", { attrs: { "page-title": "Explore" } }),
      _c(
        "StackLayout",
        [
          _c("SubHeader"),
          _c(
            "RadListView",
            {
              ref: "exploreListView",
              staticClass: "list-view",
              attrs: {
                items: _vm.speciesList,
                groupingFunction: _vm.getSpeciesGroups,
                sortingFunction: _vm.sortSpecies,
                enableCollapsibleGroups: "true"
              },
              on: { itemTap: _vm.onSpeciesTap }
            },
            [
              _c("v-template", {
                attrs: { name: "group" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(ref) {
                      var item = ref.item
                      var $index = ref.$index
                      var $even = ref.$even
                      var $odd = ref.$odd
                      return _c("Label", {
                        staticClass: "list-group",
                        attrs: {
                          text: item.category,
                          isUserInteractionEnabled: "false"
                        }
                      })
                    }
                  }
                ])
              }),
              _c("v-template", {
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(ref) {
                      var item = ref.item
                      var $index = ref.$index
                      var $even = ref.$even
                      var $odd = ref.$odd
                      return _c("ListItem", {
                        staticClass: "list-group-item",
                        attrs: {
                          "file-name": item.images[0]["file"],
                          title: item.common_name,
                          subtitle: item.scientific_name
                        }
                      })
                    }
                  }
                ])
              })
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./pages/FactSheet.vue?vue&type=template&id=4e9e46ec&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    { staticClass: "page" },
    [
      _c("Header", { attrs: { "page-title": _vm.species.common_name } }),
      _c(
        "StackLayout",
        [
          _c(
            "SubHeader",
            [
              _c(
                "GridLayout",
                {
                  staticClass: "species-genus",
                  attrs: { columns: "auto, auto, auto, auto", height: "30" }
                },
                [
                  _c(
                    "Label",
                    { attrs: { col: "0" } },
                    [
                      _c(
                        "FormattedString",
                        [
                          _c("Span", {
                            attrs: { text: "Genus:", fontWeight: "Bold" }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _c("Label", {
                    attrs: {
                      col: "1",
                      text: _vm.species.genus,
                      marginLeft: "2",
                      marginRight: "10"
                    }
                  }),
                  _c(
                    "Label",
                    { attrs: { col: "2" } },
                    [
                      _c(
                        "FormattedString",
                        [
                          _c("Span", {
                            attrs: { text: "Species:", fontWeight: "Bold" }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _c("Label", {
                    attrs: {
                      col: "3",
                      text: _vm.species.species,
                      marginLeft: "2"
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _c(
            "ScrollView",
            [
              _c(
                "StackLayout",
                [
                  _c(
                    "ScrollView",
                    { attrs: { orientation: "horizontal" } },
                    [
                      _c(
                        "StackLayout",
                        {
                          staticClass: "image-horizontal-scroll",
                          attrs: { orientation: "horizontal" }
                        },
                        _vm._l(_vm.species.images, function(image, index) {
                          return _c("Image", {
                            key: image.file,
                            class: { "image-first": index === 0 },
                            attrs: {
                              src: _vm._f("imageAssetPath")(image.file),
                              height: "240"
                            },
                            on: {
                              tap: function($event) {
                                return _vm.showModalImage(
                                  _vm.species.common_name,
                                  image
                                )
                              }
                            }
                          })
                        }),
                        1
                      )
                    ],
                    1
                  ),
                  _vm._l(_vm.species.description, function(description) {
                    return _c("Label", {
                      key: description,
                      staticClass: "body",
                      attrs: { text: description, textWrap: "true" }
                    })
                  }),
                  _c("Label", {
                    staticClass: "h2",
                    attrs: { text: "Bites and stings" }
                  }),
                  _c("Warning", { attrs: { text: _vm.species.warning } }),
                  _vm._l(_vm.species.bites_stings, function(bites) {
                    return _c("Label", {
                      key: bites,
                      staticClass: "body",
                      attrs: { text: bites, textWrap: "true" }
                    })
                  }),
                  _c("Label", {
                    staticClass: "h2",
                    attrs: { text: "Resources" }
                  }),
                  _vm._l(_vm.species.resources, function(resource) {
                    return _c("Label", {
                      key: resource,
                      staticClass: "body",
                      attrs: { text: resource, textWrap: "true" }
                    })
                  })
                ],
                2
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./pages/Home.vue?vue&type=template&id=7f245110&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    { staticClass: "page", attrs: { actionBarHidden: "true" } },
    [
      _c("Header", { attrs: { "page-title": "Home" } }),
      _c(
        "ScrollView",
        [
          _c(
            "StackLayout",
            { attrs: { width: "100%" } },
            [
              _c("Button", {
                staticClass: "fa page-icon page-icon-red pull-right",
                attrs: { "text.decode": "&#xf0c9;", width: "30" },
                on: {
                  tap: function($event) {
                    return _vm.onDrawerButtonTap()
                  }
                }
              }),
              _c("Label", {
                staticClass: "h1",
                attrs: { text: "IDentiBite", textAlignment: "center" }
              }),
              _c("Image", {
                attrs: {
                  src: _vm._f("imageAssetPath")("logo.png"),
                  width: "160",
                  id: "logo"
                }
              }),
              _c(
                "GridLayout",
                {
                  staticClass: "btn btn-primary",
                  attrs: { columns: "auto, *" },
                  on: {
                    tap: function($event) {
                      return _vm.$goto("identify")
                    }
                  }
                },
                [
                  _c("Label", {
                    staticClass: "fa",
                    attrs: { col: "0", "text.decode": "&#xf002;" }
                  }),
                  _c("Label", {
                    staticClass: "label",
                    attrs: { col: "1", text: "Identify" }
                  })
                ],
                1
              ),
              _c(
                "GridLayout",
                {
                  staticClass: "btn",
                  attrs: { columns: "auto, *" },
                  on: {
                    tap: function($event) {
                      return _vm.$goto("explore")
                    }
                  }
                },
                [
                  _c("Label", {
                    staticClass: "fa",
                    attrs: { col: "0", "text.decode": "&#xf188;" }
                  }),
                  _c("Label", {
                    staticClass: "label",
                    attrs: { col: "1", text: "Explore" }
                  })
                ],
                1
              ),
              _c(
                "GridLayout",
                {
                  staticClass: "btn",
                  attrs: { columns: "auto, *" },
                  on: {
                    tap: function($event) {
                      return _vm.$goto("treatment")
                    }
                  }
                },
                [
                  _c("Label", {
                    staticClass: "fa",
                    attrs: { col: "0", "text.decode": "&#xf21e;" }
                  }),
                  _c("Label", {
                    staticClass: "label",
                    attrs: { col: "1", text: "Treatment", textWrap: "true" }
                  })
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./pages/Identify.vue?vue&type=template&id=73b8caa5&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    { staticClass: "page" },
    [
      _c("Header", { attrs: { "page-title": "Identify" } }),
      _c(
        "GridLayout",
        { attrs: { rows: "*, 160" } },
        [
          _c(
            "StackLayout",
            { attrs: { row: "0" } },
            [
              _c(
                "SegmentedBar",
                {
                  staticClass: "segmented-bar",
                  attrs: {
                    width: "100%",
                    height: "30",
                    selectedIndex: _vm.selectedCharacterGroup
                  },
                  on: {
                    selectedIndexChange: function($event) {
                      _vm.selectedCharacterGroup = $event.value
                    }
                  }
                },
                _vm._l(_vm.characterGroups, function(group) {
                  return _c("SegmentedBarItem", {
                    key: group.key,
                    staticClass: "segmented-bar-item",
                    attrs: { title: group.title }
                  })
                }),
                1
              ),
              _c(
                "SubHeader",
                [
                  _c("Label", {
                    attrs: {
                      text: _vm.characterGroupHelp,
                      height: "30",
                      verticalAlignment: "middle"
                    }
                  })
                ],
                1
              ),
              _c(
                "ListView",
                {
                  ref: "characterList",
                  staticClass: "character-list list-view",
                  attrs: {
                    items: _vm.characterListByGroup,
                    "+alias": "character"
                  }
                },
                [
                  _c("v-template", {
                    scopedSlots: _vm._u([
                      {
                        key: "default",
                        fn: function(ref) {
                          var character = ref.character
                          var $index = ref.$index
                          var $even = ref.$even
                          var $odd = ref.$odd
                          return _c(
                            "GridLayout",
                            {
                              class: _vm.isReleventCharacter(character)
                                ? "active"
                                : "disabled",
                              attrs: {
                                columns: "*, 160",
                                verticalAlignment: "middle"
                              },
                              on: {
                                tap: function($event) {
                                  return _vm.showModalForm(character)
                                }
                              }
                            },
                            [
                              _c("Label", {
                                staticClass: "character-label",
                                attrs: {
                                  col: "0",
                                  text: character.label,
                                  textWrap: "true",
                                  verticalAlignment: "middle"
                                }
                              }),
                              _c(
                                "StackLayout",
                                {
                                  staticClass: "character-state",
                                  attrs: {
                                    col: "1",
                                    orientation: "horizontal",
                                    width: "160",
                                    height: "30",
                                    verticalAlignment: "middle"
                                  }
                                },
                                [
                                  _c("Label", {
                                    attrs: {
                                      width: "125",
                                      text: _vm.getCharacterSelectedStateValue(
                                        character
                                      ),
                                      verticalAlignment: "middle"
                                    }
                                  }),
                                  _c("Label", {
                                    staticClass: "fa page-icon",
                                    attrs: {
                                      "text.decode": "&#xf078;",
                                      verticalAlignment: "middle"
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          )
                        }
                      }
                    ])
                  })
                ],
                1
              )
            ],
            1
          ),
          _c(
            "StackLayout",
            {
              staticClass: "identify-results",
              attrs: { row: "1", verticalAlignment: "bottom" }
            },
            [
              _c(
                "GridLayout",
                {
                  staticClass: "m-t-5 m-b-5 page-side-margins",
                  attrs: {
                    columns: "auto, 40, *, 80",
                    height: "24",
                    verticalAlignment: "middle"
                  }
                },
                [
                  _c("Label", {
                    attrs: { col: "0", text: "Current possibilities:" }
                  }),
                  _c("Label", {
                    staticClass: "current-possibilities-count",
                    attrs: {
                      col: "1",
                      text: _vm.currentPosibilitiesCount,
                      textAlignment: "center"
                    }
                  }),
                  _c("Button", {
                    staticClass: "btn btn-dark-grey btn-small btn-rounded-sm",
                    attrs: { col: "3", width: "80", text: "Reset" },
                    on: { tap: _vm.onResetButtonTap }
                  })
                ],
                1
              ),
              _c(
                "ScrollView",
                { attrs: { orientation: "horizontal" } },
                [
                  _c(
                    "StackLayout",
                    { attrs: { orientation: "horizontal", height: "130" } },
                    _vm._l(_vm.speciesList, function(species) {
                      return _c(
                        "GridLayout",
                        {
                          key: species.id,
                          staticClass: "identify-results-item",
                          attrs: {
                            columns: _vm.speciesList.length,
                            width: "130",
                            height: "130",
                            rows: "*, 30"
                          },
                          on: {
                            tap: function($event) {
                              return _vm.onSpeciesTap({ species: species })
                            }
                          }
                        },
                        [
                          _c("Image", {
                            attrs: {
                              height: "100",
                              width: "130",
                              src: _vm._f("imageAssetPath")(
                                species.images[0].file
                              ),
                              row: "0",
                              stretch: "aspectFill"
                            }
                          }),
                          _c("Label", {
                            staticClass: "nameLabel",
                            attrs: { text: species.common_name, row: "1" }
                          })
                        ],
                        1
                      )
                    }),
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./pages/Treatment.vue?vue&type=template&id=baddffa2&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    { staticClass: "page" },
    [
      _c("Header", { attrs: { "page-title": "Treatment" } }),
      _c(
        "StackLayout",
        [
          _c("SubHeader"),
          _c(
            "GridLayout",
            [
              _c(
                "ListView",
                {
                  attrs: { items: _vm.treatmentList, "+alias": "treatment" },
                  on: { itemTap: _vm.onTreatmentTap }
                },
                [
                  _c("v-template", {
                    scopedSlots: _vm._u([
                      {
                        key: "default",
                        fn: function(ref) {
                          var treatment = ref.treatment
                          var $index = ref.$index
                          var $even = ref.$even
                          var $odd = ref.$odd
                          return _c("ListItem", {
                            attrs: {
                              "file-name": treatment["image"]["file"],
                              title: treatment.short_title,
                              subtitle: treatment.title
                            }
                          })
                        }
                      }
                    ])
                  })
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./pages/TreatmentDetail.vue?vue&type=template&id=0b9596e0&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    { staticClass: "page" },
    [
      _c("Header", { attrs: { "page-title": _vm.treatment.short_title } }),
      _c(
        "StackLayout",
        [
          _c(
            "SubHeader",
            [
              _c("Label", {
                attrs: { text: _vm.treatment.title, height: "30" }
              })
            ],
            1
          ),
          _c(
            "ScrollView",
            [
              _c(
                "StackLayout",
                [
                  _c("Image", {
                    staticClass: "page-margins",
                    attrs: {
                      col: "0",
                      src: _vm._f("imageAssetPath")(
                        _vm.treatment["image"]["file"]
                      )
                    },
                    on: {
                      tap: function($event) {
                        return _vm.showModalImage(
                          _vm.treatment.title,
                          _vm.treatment.image
                        )
                      }
                    }
                  }),
                  _vm._l(_vm.treatment.text, function(text) {
                    return _c("Label", {
                      key: text,
                      class: _vm.isTitle(text) ? "h2" : "body",
                      attrs: { text: text, textWrap: "true" }
                    })
                  }),
                  _c("Warning", { attrs: { text: _vm.treatment.warning } }),
                  _c("TreatmentReferences")
                ],
                2
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./ sync ^\\.\\/app\\.(css|scss|less|sass)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app.scss": "./app.scss"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync ^\\.\\/app\\.(css|scss|less|sass)$";

/***/ }),

/***/ "./ sync recursive (?<!\\bApp_Resources\\b.*)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app.js": "./app.js",
	"./app.scss": "./app.scss",
	"./filters.js": "./filters.js",
	"./router.js": "./router.js",
	"./shared/selected-page-service.js": "./shared/selected-page-service.js",
	"./shared/utils.js": "./shared/utils.js",
	"./store.js": "./store.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync recursive (?<!\\bApp_Resources\\b.*)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$";

/***/ }),

/***/ "./app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-vue/dist/index.js");
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/App.vue");
/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./pages/Home.vue");
/* harmony import */ var _components_DrawerContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./components/DrawerContent.vue");
/* harmony import */ var nativescript_ui_sidedrawer_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/nativescript-ui-sidedrawer/vue/index.js");
/* harmony import */ var nativescript_ui_sidedrawer_vue__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_sidedrawer_vue__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./shared/utils.js");
/* harmony import */ var _shared_selected_page_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./shared/selected-page-service.js");
/* harmony import */ var _shared_selected_page_service__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_shared_selected_page_service__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var nativescript_ui_listview_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../node_modules/nativescript-ui-listview/vue/index.js");
/* harmony import */ var nativescript_ui_listview_vue__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_listview_vue__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var nativescript_windowed_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../node_modules/nativescript-windowed-modal/index.js");
/* harmony import */ var nativescript_windowed_modal__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(nativescript_windowed_modal__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./store.js");
/* harmony import */ var _filters_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./filters.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./router.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./components/Header.vue");
/* harmony import */ var _components_SubHeader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./components/SubHeader.vue");

            __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css-regular.js")();
            
            
        if (false) {}
        
            const context = __webpack_require__("./ sync recursive (?<!\\bApp_Resources\\b.*)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$");
            global.registerWebpackModules(context);
            if (false) {}
            
        __webpack_require__("../node_modules/tns-core-modules/bundle-entry-points.js");
        






nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(nativescript_ui_sidedrawer_vue__WEBPACK_IMPORTED_MODULE_4___default.a);

nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(nativescript_ui_listview_vue__WEBPACK_IMPORTED_MODULE_7___default.a);

Object(nativescript_windowed_modal__WEBPACK_IMPORTED_MODULE_8__["overrideModalViewMethod"])();
nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a.registerElement("ModalStack", () => nativescript_windowed_modal__WEBPACK_IMPORTED_MODULE_8__["ModalStack"]);
nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(nativescript_windowed_modal__WEBPACK_IMPORTED_MODULE_8__["VueWindowedModal"]);
nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a.config.silent = "development" === 'production';

 // Routing


nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a.prototype.$router = _router__WEBPACK_IMPORTED_MODULE_11__["default"];

nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a.prototype.$goto = function (to, options = {}) {
  if (to == 'home') {
    options['clearHistory'] = true;
  }

  this.$navigateTo(this.$router[to], options);
  _shared_utils__WEBPACK_IMPORTED_MODULE_5__["closeDrawer"]();
};

nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a.prototype.$updateSelectedPage = function (pageName) {
  _shared_selected_page_service__WEBPACK_IMPORTED_MODULE_6___default.a.getInstance().updateSelectedPage(pageName);
}; // Register the header component globally



nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('Header', _components_Header__WEBPACK_IMPORTED_MODULE_12__["default"]); // Register the subheader component globally


nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('SubHeader', _components_SubHeader__WEBPACK_IMPORTED_MODULE_13__["default"]);
nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a.prototype.$store = _store__WEBPACK_IMPORTED_MODULE_9__["default"];
new nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a({
  render(h) {
    return h(_components_App__WEBPACK_IMPORTED_MODULE_1__["default"], [h(_components_DrawerContent__WEBPACK_IMPORTED_MODULE_3__["default"], {
      slot: 'drawerContent'
    }), h(_pages_Home__WEBPACK_IMPORTED_MODULE_2__["default"], {
      slot: 'mainContent'
    })]);
  }

}).$start();
    
        
        
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/**\r\n * Convenient single import for light variables\r\n * Includes base variables with light overrides\r\n **/\n/**\r\n * Light variable overrides\r\n **/\n/**\n * Theme variables overrides\n**/\n/**\r\n * Color classes\r\n * The following creates this pattern:\r\n * .c-grey{color:#e0e0e0}.c-bg-grey{background-color:#e0e0e0}\r\n**/\n.c-white {\n  color: #fff; }\n\n.c-bg-white {\n  background-color: #fff; }\n\n.c-black {\n  color: #000; }\n\n.c-bg-black {\n  background-color: #000; }\n\n.c-aqua {\n  color: #00caab; }\n\n.c-bg-aqua {\n  background-color: #00caab; }\n\n.c-blue {\n  color: #3d5afe; }\n\n.c-bg-blue {\n  background-color: #3d5afe; }\n\n.c-charcoal {\n  color: #303030; }\n\n.c-bg-charcoal {\n  background-color: #303030; }\n\n.c-brown {\n  color: #795548; }\n\n.c-bg-brown {\n  background-color: #795548; }\n\n.c-forest {\n  color: #006968; }\n\n.c-bg-forest {\n  background-color: #006968; }\n\n.c-grey {\n  color: #e0e0e0; }\n\n.c-bg-grey {\n  background-color: #e0e0e0; }\n\n.c-grey-light {\n  color: #bababa; }\n\n.c-bg-grey-light {\n  background-color: #bababa; }\n\n.c-grey-dark {\n  color: #5c687c; }\n\n.c-bg-grey-dark {\n  background-color: #5c687c; }\n\n.c-purple {\n  color: #8130ff; }\n\n.c-bg-purple {\n  background-color: #8130ff; }\n\n.c-lemon {\n  color: #ffea00; }\n\n.c-bg-lemon {\n  background-color: #ffea00; }\n\n.c-lime {\n  color: #aee406; }\n\n.c-bg-lime {\n  background-color: #aee406; }\n\n.c-orange {\n  color: #f57c00; }\n\n.c-bg-orange {\n  background-color: #f57c00; }\n\n.c-ruby {\n  color: #ff1744; }\n\n.c-bg-ruby {\n  background-color: #ff1744; }\n\n.c-sky {\n  color: #30bcff; }\n\n.c-bg-sky {\n  background-color: #30bcff; }\n\n/* Width/Height */\n.w-full {\n  width: 100%; }\n\n.w-100 {\n  width: 100; }\n\n.h-full {\n  height: 100%; }\n\n.h-100 {\n  height: 100; }\n\n/**\r\n * Margin and Padding\r\n * The following creates this pattern:\r\n * .m-0{margin:0}.m-t-0{margin-top:0}.m-r-0{margin-right:0}.m-b-0{margin-bottom:0}.m-l-0{margin-left:0}.m-x-0{margin-right:0;margin-left:0}.m-y-0{margin-top:0;margin-bottom:0}\r\n * Same for Padding (using the 'p' abbreviation)\r\n * From 0, 2, 5, 10, 15, 20, 25, 30\r\n**/\n.m-0 {\n  margin: 0; }\n\n.m-t-0 {\n  margin-top: 0; }\n\n.m-r-0 {\n  margin-right: 0; }\n\n.m-b-0 {\n  margin-bottom: 0; }\n\n.m-l-0 {\n  margin-left: 0; }\n\n.m-x-0 {\n  margin-right: 0;\n  margin-left: 0; }\n\n.m-y-0 {\n  margin-top: 0;\n  margin-bottom: 0; }\n\n.m-2 {\n  margin: 2; }\n\n.m-t-2 {\n  margin-top: 2; }\n\n.m-r-2 {\n  margin-right: 2; }\n\n.m-b-2 {\n  margin-bottom: 2; }\n\n.m-l-2 {\n  margin-left: 2; }\n\n.m-x-2 {\n  margin-right: 2;\n  margin-left: 2; }\n\n.m-y-2 {\n  margin-top: 2;\n  margin-bottom: 2; }\n\n.m-4 {\n  margin: 4; }\n\n.m-t-4 {\n  margin-top: 4; }\n\n.m-r-4 {\n  margin-right: 4; }\n\n.m-b-4 {\n  margin-bottom: 4; }\n\n.m-l-4 {\n  margin-left: 4; }\n\n.m-x-4 {\n  margin-right: 4;\n  margin-left: 4; }\n\n.m-y-4 {\n  margin-top: 4;\n  margin-bottom: 4; }\n\n.m-5 {\n  margin: 5; }\n\n.m-t-5 {\n  margin-top: 5; }\n\n.m-r-5 {\n  margin-right: 5; }\n\n.m-b-5 {\n  margin-bottom: 5; }\n\n.m-l-5 {\n  margin-left: 5; }\n\n.m-x-5 {\n  margin-right: 5;\n  margin-left: 5; }\n\n.m-y-5 {\n  margin-top: 5;\n  margin-bottom: 5; }\n\n.m-8 {\n  margin: 8; }\n\n.m-t-8 {\n  margin-top: 8; }\n\n.m-r-8 {\n  margin-right: 8; }\n\n.m-b-8 {\n  margin-bottom: 8; }\n\n.m-l-8 {\n  margin-left: 8; }\n\n.m-x-8 {\n  margin-right: 8;\n  margin-left: 8; }\n\n.m-y-8 {\n  margin-top: 8;\n  margin-bottom: 8; }\n\n.m-10 {\n  margin: 10; }\n\n.m-t-10 {\n  margin-top: 10; }\n\n.m-r-10 {\n  margin-right: 10; }\n\n.m-b-10 {\n  margin-bottom: 10; }\n\n.m-l-10 {\n  margin-left: 10; }\n\n.m-x-10 {\n  margin-right: 10;\n  margin-left: 10; }\n\n.m-y-10 {\n  margin-top: 10;\n  margin-bottom: 10; }\n\n.m-12 {\n  margin: 12; }\n\n.m-t-12 {\n  margin-top: 12; }\n\n.m-r-12 {\n  margin-right: 12; }\n\n.m-b-12 {\n  margin-bottom: 12; }\n\n.m-l-12 {\n  margin-left: 12; }\n\n.m-x-12 {\n  margin-right: 12;\n  margin-left: 12; }\n\n.m-y-12 {\n  margin-top: 12;\n  margin-bottom: 12; }\n\n.m-15 {\n  margin: 15; }\n\n.m-t-15 {\n  margin-top: 15; }\n\n.m-r-15 {\n  margin-right: 15; }\n\n.m-b-15 {\n  margin-bottom: 15; }\n\n.m-l-15 {\n  margin-left: 15; }\n\n.m-x-15 {\n  margin-right: 15;\n  margin-left: 15; }\n\n.m-y-15 {\n  margin-top: 15;\n  margin-bottom: 15; }\n\n.m-16 {\n  margin: 16; }\n\n.m-t-16 {\n  margin-top: 16; }\n\n.m-r-16 {\n  margin-right: 16; }\n\n.m-b-16 {\n  margin-bottom: 16; }\n\n.m-l-16 {\n  margin-left: 16; }\n\n.m-x-16 {\n  margin-right: 16;\n  margin-left: 16; }\n\n.m-y-16 {\n  margin-top: 16;\n  margin-bottom: 16; }\n\n.m-20 {\n  margin: 20; }\n\n.m-t-20 {\n  margin-top: 20; }\n\n.m-r-20 {\n  margin-right: 20; }\n\n.m-b-20 {\n  margin-bottom: 20; }\n\n.m-l-20 {\n  margin-left: 20; }\n\n.m-x-20 {\n  margin-right: 20;\n  margin-left: 20; }\n\n.m-y-20 {\n  margin-top: 20;\n  margin-bottom: 20; }\n\n.m-24 {\n  margin: 24; }\n\n.m-t-24 {\n  margin-top: 24; }\n\n.m-r-24 {\n  margin-right: 24; }\n\n.m-b-24 {\n  margin-bottom: 24; }\n\n.m-l-24 {\n  margin-left: 24; }\n\n.m-x-24 {\n  margin-right: 24;\n  margin-left: 24; }\n\n.m-y-24 {\n  margin-top: 24;\n  margin-bottom: 24; }\n\n.m-25 {\n  margin: 25; }\n\n.m-t-25 {\n  margin-top: 25; }\n\n.m-r-25 {\n  margin-right: 25; }\n\n.m-b-25 {\n  margin-bottom: 25; }\n\n.m-l-25 {\n  margin-left: 25; }\n\n.m-x-25 {\n  margin-right: 25;\n  margin-left: 25; }\n\n.m-y-25 {\n  margin-top: 25;\n  margin-bottom: 25; }\n\n.m-28 {\n  margin: 28; }\n\n.m-t-28 {\n  margin-top: 28; }\n\n.m-r-28 {\n  margin-right: 28; }\n\n.m-b-28 {\n  margin-bottom: 28; }\n\n.m-l-28 {\n  margin-left: 28; }\n\n.m-x-28 {\n  margin-right: 28;\n  margin-left: 28; }\n\n.m-y-28 {\n  margin-top: 28;\n  margin-bottom: 28; }\n\n.m-30 {\n  margin: 30; }\n\n.m-t-30 {\n  margin-top: 30; }\n\n.m-r-30 {\n  margin-right: 30; }\n\n.m-b-30 {\n  margin-bottom: 30; }\n\n.m-l-30 {\n  margin-left: 30; }\n\n.m-x-30 {\n  margin-right: 30;\n  margin-left: 30; }\n\n.m-y-30 {\n  margin-top: 30;\n  margin-bottom: 30; }\n\n.p-0 {\n  padding: 0; }\n\n.p-t-0 {\n  padding-top: 0; }\n\n.p-r-0 {\n  padding-right: 0; }\n\n.p-b-0 {\n  padding-bottom: 0; }\n\n.p-l-0 {\n  padding-left: 0; }\n\n.p-x-0 {\n  padding-right: 0;\n  padding-left: 0; }\n\n.p-y-0 {\n  padding-top: 0;\n  padding-bottom: 0; }\n\n.p-2 {\n  padding: 2; }\n\n.p-t-2 {\n  padding-top: 2; }\n\n.p-r-2 {\n  padding-right: 2; }\n\n.p-b-2 {\n  padding-bottom: 2; }\n\n.p-l-2 {\n  padding-left: 2; }\n\n.p-x-2 {\n  padding-right: 2;\n  padding-left: 2; }\n\n.p-y-2 {\n  padding-top: 2;\n  padding-bottom: 2; }\n\n.p-4 {\n  padding: 4; }\n\n.p-t-4 {\n  padding-top: 4; }\n\n.p-r-4 {\n  padding-right: 4; }\n\n.p-b-4 {\n  padding-bottom: 4; }\n\n.p-l-4 {\n  padding-left: 4; }\n\n.p-x-4 {\n  padding-right: 4;\n  padding-left: 4; }\n\n.p-y-4 {\n  padding-top: 4;\n  padding-bottom: 4; }\n\n.p-5 {\n  padding: 5; }\n\n.p-t-5 {\n  padding-top: 5; }\n\n.p-r-5 {\n  padding-right: 5; }\n\n.p-b-5 {\n  padding-bottom: 5; }\n\n.p-l-5 {\n  padding-left: 5; }\n\n.p-x-5 {\n  padding-right: 5;\n  padding-left: 5; }\n\n.p-y-5 {\n  padding-top: 5;\n  padding-bottom: 5; }\n\n.p-8 {\n  padding: 8; }\n\n.p-t-8 {\n  padding-top: 8; }\n\n.p-r-8 {\n  padding-right: 8; }\n\n.p-b-8 {\n  padding-bottom: 8; }\n\n.p-l-8 {\n  padding-left: 8; }\n\n.p-x-8 {\n  padding-right: 8;\n  padding-left: 8; }\n\n.p-y-8 {\n  padding-top: 8;\n  padding-bottom: 8; }\n\n.p-10 {\n  padding: 10; }\n\n.p-t-10 {\n  padding-top: 10; }\n\n.p-r-10 {\n  padding-right: 10; }\n\n.p-b-10 {\n  padding-bottom: 10; }\n\n.p-l-10 {\n  padding-left: 10; }\n\n.p-x-10 {\n  padding-right: 10;\n  padding-left: 10; }\n\n.p-y-10 {\n  padding-top: 10;\n  padding-bottom: 10; }\n\n.p-12 {\n  padding: 12; }\n\n.p-t-12 {\n  padding-top: 12; }\n\n.p-r-12 {\n  padding-right: 12; }\n\n.p-b-12 {\n  padding-bottom: 12; }\n\n.p-l-12 {\n  padding-left: 12; }\n\n.p-x-12 {\n  padding-right: 12;\n  padding-left: 12; }\n\n.p-y-12 {\n  padding-top: 12;\n  padding-bottom: 12; }\n\n.p-15 {\n  padding: 15; }\n\n.p-t-15 {\n  padding-top: 15; }\n\n.p-r-15 {\n  padding-right: 15; }\n\n.p-b-15 {\n  padding-bottom: 15; }\n\n.p-l-15 {\n  padding-left: 15; }\n\n.p-x-15 {\n  padding-right: 15;\n  padding-left: 15; }\n\n.p-y-15 {\n  padding-top: 15;\n  padding-bottom: 15; }\n\n.p-16 {\n  padding: 16; }\n\n.p-t-16 {\n  padding-top: 16; }\n\n.p-r-16 {\n  padding-right: 16; }\n\n.p-b-16 {\n  padding-bottom: 16; }\n\n.p-l-16 {\n  padding-left: 16; }\n\n.p-x-16 {\n  padding-right: 16;\n  padding-left: 16; }\n\n.p-y-16 {\n  padding-top: 16;\n  padding-bottom: 16; }\n\n.p-20 {\n  padding: 20; }\n\n.p-t-20 {\n  padding-top: 20; }\n\n.p-r-20 {\n  padding-right: 20; }\n\n.p-b-20 {\n  padding-bottom: 20; }\n\n.p-l-20 {\n  padding-left: 20; }\n\n.p-x-20 {\n  padding-right: 20;\n  padding-left: 20; }\n\n.p-y-20 {\n  padding-top: 20;\n  padding-bottom: 20; }\n\n.p-24 {\n  padding: 24; }\n\n.p-t-24 {\n  padding-top: 24; }\n\n.p-r-24 {\n  padding-right: 24; }\n\n.p-b-24 {\n  padding-bottom: 24; }\n\n.p-l-24 {\n  padding-left: 24; }\n\n.p-x-24 {\n  padding-right: 24;\n  padding-left: 24; }\n\n.p-y-24 {\n  padding-top: 24;\n  padding-bottom: 24; }\n\n.p-25 {\n  padding: 25; }\n\n.p-t-25 {\n  padding-top: 25; }\n\n.p-r-25 {\n  padding-right: 25; }\n\n.p-b-25 {\n  padding-bottom: 25; }\n\n.p-l-25 {\n  padding-left: 25; }\n\n.p-x-25 {\n  padding-right: 25;\n  padding-left: 25; }\n\n.p-y-25 {\n  padding-top: 25;\n  padding-bottom: 25; }\n\n.p-28 {\n  padding: 28; }\n\n.p-t-28 {\n  padding-top: 28; }\n\n.p-r-28 {\n  padding-right: 28; }\n\n.p-b-28 {\n  padding-bottom: 28; }\n\n.p-l-28 {\n  padding-left: 28; }\n\n.p-x-28 {\n  padding-right: 28;\n  padding-left: 28; }\n\n.p-y-28 {\n  padding-top: 28;\n  padding-bottom: 28; }\n\n.p-30 {\n  padding: 30; }\n\n.p-t-30 {\n  padding-top: 30; }\n\n.p-r-30 {\n  padding-right: 30; }\n\n.p-b-30 {\n  padding-bottom: 30; }\n\n.p-l-30 {\n  padding-left: 30; }\n\n.p-x-30 {\n  padding-right: 30;\n  padding-left: 30; }\n\n.p-y-30 {\n  padding-top: 30;\n  padding-bottom: 30; }\n\n/* Dividers */\n.hr-light {\n  height: 1;\n  background-color: #e0e0e0;\n  width: 100%; }\n\n.hr-dark {\n  height: 1;\n  background-color: #303030;\n  width: 100%; }\n\n/* Alignment */\n.text-left {\n  text-align: left; }\n\n.text-right {\n  text-align: right; }\n\n.text-center {\n  text-align: center; }\n\n.text-lowercase {\n  text-transform: lowercase; }\n\n.text-uppercase {\n  text-transform: uppercase; }\n\n.text-capitalize {\n  text-transform: capitalize; }\n\n.font-weight-normal {\n  font-weight: normal; }\n\n.font-weight-bold {\n  font-weight: bold; }\n\n.font-italic {\n  font-style: italic; }\n\n/**\r\n * Font size\r\n * The following creates this pattern:\r\n * .t-10{font-size:10}\r\n * From 10, 12, 14, 15, 16, 17, 18, 19, 20\r\n**/\n.t-10 {\n  font-size: 10; }\n\n.t-12 {\n  font-size: 12; }\n\n.t-14 {\n  font-size: 14; }\n\n.t-15 {\n  font-size: 15; }\n\n.t-16 {\n  font-size: 16; }\n\n.t-17 {\n  font-size: 17; }\n\n.t-18 {\n  font-size: 18; }\n\n.t-19 {\n  font-size: 19; }\n\n.t-20 {\n  font-size: 20; }\n\n.t-25 {\n  font-size: 25; }\n\n.t-30 {\n  font-size: 30; }\n\n.img-rounded {\n  border-radius: 5; }\n\n.img-circle {\n  border-radius: 20; }\n\n.img-thumbnail {\n  border-radius: 0; }\n\n.invisible {\n  visibility: collapse; }\n\n.pull-left {\n  horizontal-align: left; }\n\n.pull-right {\n  horizontal-align: right; }\n\n.m-x-auto {\n  horizontal-align: center; }\n\n.m-y-auto {\n  vertical-align: center; }\n\n.text-primary {\n  color: #30bcff; }\n\n.text-danger {\n  color: #d50000; }\n\n.text-muted {\n  color: #403e3e; }\n\n.bg-primary {\n  background-color: #30bcff;\n  color: #fff; }\n\n.bg-danger {\n  background-color: #d50000;\n  color: #fff; }\n\n.action-bar {\n  background-color: #EE0510;\n  color: #fff; }\n  .action-bar .action-bar-title {\n    font-weight: bold;\n    font-size: 17;\n    vertical-align: center; }\n  .action-bar .action-item {\n    font-weight: normal; }\n\n.activity-indicator {\n  color: #30bcff;\n  width: 30;\n  height: 30; }\n\n.btn {\n  color: #30bcff;\n  background-color: transparent;\n  min-height: 36;\n  min-width: 64;\n  padding: 10 10 10 10;\n  font-size: 18;\n  margin: 8 16 8 16; }\n  .btn.btn-active:highlighted {\n    color: #fff;\n    background-color: #c0ebff; }\n\n.btn-primary {\n  background-color: #30bcff;\n  border-color: #30bcff;\n  color: #fff; }\n  .btn-primary.btn-active:highlighted {\n    background-color: #01a0ec;\n    border-color: #01a0ec; }\n  .btn-primary.btn-aqua {\n    background-color: #00caab; }\n  .btn-primary.btn-blue {\n    background-color: #3d5afe; }\n  .btn-primary.btn-brown {\n    background-color: #795548; }\n  .btn-primary.btn-forest {\n    background-color: #006968; }\n  .btn-primary.btn-grey {\n    background-color: #5c687c; }\n  .btn-primary.btn-lemon {\n    background-color: #ffea00;\n    color: #000; }\n  .btn-primary.btn-lime {\n    background-color: #aee406;\n    color: #000; }\n  .btn-primary.btn-orange {\n    background-color: #f57c00; }\n  .btn-primary.btn-purple {\n    background-color: #8130ff; }\n  .btn-primary.btn-ruby {\n    background-color: #ff1744; }\n  .btn-primary.btn-sky {\n    background-color: #30bcff; }\n\n.btn-outline {\n  background-color: transparent;\n  border-color: #30bcff;\n  color: #30bcff; }\n  .btn-outline.btn-active:highlighted {\n    background-color: #c0ebff; }\n\n.btn[isEnabled=false] {\n  color: #a4a4a4;\n  background-color: #e0e0e0;\n  border-color: #e0e0e0; }\n\n.fa {\n  font-family: FontAwesome, fontawesome-webfont; }\n\n.form .input {\n  padding: 16 8 16 8;\n  background-color: transparent; }\n  .form .input.input-border {\n    border-width: 1;\n    border-color: #e0e0e0;\n    border-radius: 2;\n    padding: 16; }\n  .form .input.input-rounded {\n    border-width: 1;\n    border-color: #e0e0e0;\n    border-radius: 28;\n    padding: 16; }\n  .form .input[isEnabled='false'] {\n    background-color: #fafafa; }\n\n.form .input-field {\n  margin: 8; }\n  .form .input-field .label {\n    font-size: 12;\n    color: #bababa; }\n  .form .input-field .input {\n    padding: 0;\n    margin: 0 0 8 0; }\n  .form .input-field .hr-light.active,\n  .form .input-field .hr-dark.active {\n    background-color: #30bcff; }\n  .form .input-field.input-sides .label {\n    font-size: 18;\n    margin: 0 0 8 0; }\n\n.h1, .h2, .h3, .h4, .h5, .h6 {\n  margin-bottom: 4;\n  font-weight: normal;\n  color: #403e3e; }\n\n.body,\n.body2,\n.footnote {\n  font-weight: normal;\n  color: #403e3e; }\n\n.h1 {\n  font-size: 32; }\n\n.h2 {\n  font-size: 22; }\n\n.h3 {\n  font-size: 15; }\n\n.h4 {\n  font-size: 12; }\n\n.h5 {\n  font-size: 11; }\n\n.h6 {\n  font-size: 10; }\n\n.body {\n  font-size: 14; }\n\n.body2 {\n  font-size: 17; }\n\n.footnote {\n  font-size: 13; }\n\n.list-group .list-group-item {\n  color: #403e3e;\n  font-size: 16;\n  margin: 0;\n  padding: 16; }\n  .list-group .list-group-item Label {\n    vertical-align: center; }\n  .list-group .list-group-item .thumb {\n    stretch: fill;\n    width: 40;\n    height: 40;\n    margin-right: 16; }\n  .list-group .list-group-item.active {\n    background-color: #e0e0e0; }\n  .list-group .list-group-item .list-group-item-text {\n    color: #403e3e;\n    font-size: 14; }\n\n.page {\n  background-color: #fff; }\n\n.progress {\n  color: #30bcff;\n  background-color: #bababa; }\n\n.segmented-bar {\n  font-size: 13;\n  background-color: #fff;\n  color: #403e3e;\n  selected-background-color: #30bcff; }\n\n.sidedrawer-left, .sidedrawer-center {\n  background-color: #FFFFFF; }\n\n.sidedrawer-header {\n  background-color: #EE0510;\n  height: 148;\n  width: 100%; }\n\n.sidedrawer-left .sidedrawer-header {\n  padding: 16 16 0 16; }\n\n.sidedrawer-center .sidedrawer-header {\n  padding: 20 15 0 15; }\n\n.sidedrawer-header-image {\n  background-color: #e0e0e0; }\n\n.sidedrawer-left .sidedrawer-header-image {\n  height: 64;\n  width: 64;\n  border-radius: 32;\n  horizontal-align: left;\n  margin-bottom: 36; }\n\n.sidedrawer-center .sidedrawer-header-image {\n  height: 74;\n  width: 74;\n  border-radius: 37;\n  horizontal-align: center;\n  margin-bottom: 24; }\n\n.sidedrawer-header-brand {\n  color: #737373; }\n\n.sidedrawer-left .sidedrawer-header-brand {\n  horizontal-align: left;\n  font-size: 14; }\n\n.sidedrawer-center .sidedrawer-header-brand {\n  horizontal-align: center;\n  font-size: 15; }\n\n.sidedrawer-list-item {\n  height: 48;\n  horizontal-align: left;\n  width: 100%;\n  orientation: horizontal; }\n  .sidedrawer-list-item .sidedrawer-list-item-icon {\n    width: 24;\n    text-align: center;\n    font-size: 20;\n    height: 48;\n    vertical-align: center; }\n  .sidedrawer-list-item.active {\n    color: #EE0510;\n    background-color: #F8F8F8; }\n    .sidedrawer-list-item.active .sidedrawer-list-item-icon {\n      color: #EE0510; }\n\n.sidedrawer-left .sidedrawer-list-item-icon {\n  margin: 0 16 0 16; }\n\n.sidedrawer-center .sidedrawer-list-item-icon {\n  margin: 0 0 0 15; }\n\n.sidedrawer-list-item-text {\n  horizontal-align: left;\n  text-align: left;\n  font-size: 15;\n  background-color: transparent;\n  border-width: 0.1;\n  width: 80%;\n  vertical-align: center; }\n\n.sidedrawer-left .sidedrawer-list-item-text {\n  padding-left: 16; }\n\n.sidedrawer-center .sidedrawer-list-item-text {\n  padding-left: 15; }\n\n.slider {\n  background-color: #30bcff; }\n  .slider[isEnabled=false] {\n    background-color: #e0e0e0;\n    color: #e0e0e0; }\n\n.switch[checked=true] {\n  background-color: #30bcff;\n  color: #30bcff; }\n\n.switch[checked=true][isEnabled=false] {\n  background-color: #e0e0e0;\n  color: #fff; }\n\n.switch[isEnabled=false] {\n  background-color: #e0e0e0;\n  color: #e0e0e0; }\n\n.tab-view {\n  /*color: $secondary;*/\n  selected-color: #30bcff;\n  tabs-background-color: #fff; }\n  .tab-view .tab-view-item {\n    background-color: #fff;\n    tabs-background-color: #fff; }\n\n#login-background {\n  margin-top: -20;\n  background-size: cover;\n  background-position: center; }\n\n.login-wrap {\n  padding: 0 40; }\n\n.logo-wrap {\n  margin: 60 0 10 0;\n  padding: 20 0; }\n  .logo-wrap .login-logo {\n    text-align: center;\n    font-size: 30;\n    font-weight: bold;\n    margin-bottom: 10;\n    opacity: 1;\n    color: #403e3e;\n    opacity: .9; }\n  .logo-wrap .login-logo-sub {\n    color: #403e3e;\n    opacity: .8;\n    text-align: center; }\n\n.login-wrapper {\n  padding: 20;\n  background-color: #fff;\n  border-radius: 3; }\n  .login-wrapper TextField {\n    padding: 10 10;\n    margin: 10 0 0 0; }\n\n.go-back {\n  font-size: 14;\n  text-align: center;\n  color: #403e3e;\n  margin-top: 10; }\n\n/**\r\n * Import all platform specific files here\r\n */\n.btn {\n  border-width: 0;\n  font-family: 'SF UI Text Medium';\n  font-size: 15; }\n\n.btn-outline {\n  border-width: 1; }\n\n.btn-rounded-sm {\n  border-radius: 4; }\n\n.btn-rounded-lg {\n  border-radius: 19; }\n\n.form {\n  font-family: 'SF UI Text Regular'; }\n  .form .input {\n    font-size: 15; }\n    .form .input.input-rounded {\n      border-radius: 27; }\n\n/* This is here temporarily because _index.ios.scss cannot be empty */\n.h1 {\n  font-size: 32; }\n\n.slider {\n  margin: 10 15; }\n\n.sidedrawer-list-item-icon, .sidedrawer-list-item {\n  color: #403e3e; }\n\n.switch {\n  margin: 8 15; }\n\n.list-group .list-group-item {\n  padding: 16 15 16 15; }\n  .list-group .list-group-item .thumb {\n    margin-right: 15; }\n  .list-group .list-group-item .list-group-item-heading {\n    margin-bottom: 5; }\n\n.segmented-bar {\n  margin: 0 15;\n  color: #30bcff; }\n\n/* Action bar*/\nActionBar .action-bar-title {\n  horizontal-align: center;\n  font-size: 26;\n  font-weight: normal; }\n\nActionBar {\n  background-color: #CB0000;\n  padding: 0 10; }\n\nActionBar .fa {\n  font-size: 26; }\n\n.btn {\n  min-height: auto;\n  color: #EE0510;\n  background-color: #F1EFF0;\n  padding: 15 10; }\n  .btn.btn-primary {\n    color: #fff;\n    background-color: #EE0510; }\n  .btn.btn-dark-grey {\n    background-color: #595858;\n    color: #fff; }\n  .btn.btn-grey {\n    background-color: #F1EFF0;\n    color: #403e3e; }\n  .btn.btn-transparent {\n    background-color: transparent;\n    color: #403e3e; }\n  .btn.btn-small {\n    height: 50px;\n    font-size: 14;\n    padding: 0; }\n  .btn.btn-rounded-sm {\n    border-radius: 5; }\n  .btn .fa {\n    font-size: 24;\n    margin-right: 10; }\n\n.fa {\n  font-family: \"FontAwesome\"; }\n\n.page-icon {\n  font-size: 26;\n  margin: 0; }\n  .page-icon.page-icon-red {\n    color: #EE0510; }\n\nbutton.page-icon {\n  border-color: transparent;\n  border-width: 1;\n  background-color: transparent;\n  z-index: 0;\n  text-transform: capitalize; }\n\n.image-horizontal-scroll {\n  padding: 10; }\n  .image-horizontal-scroll image {\n    margin-left: 20px; }\n    .image-horizontal-scroll image.image-first {\n      margin-left: 0; }\n\n.list-view {\n  separator-color: #F1EFF0; }\n  .list-view .list-group {\n    background: #F1EFF0;\n    padding-left: 10;\n    color: #403e3e;\n    padding-top: 15px;\n    padding-bottom: 15px;\n    margin: 15px 0 5px 0;\n    font-size: 18;\n    margin: 0; }\n\n.page {\n  font-size: 14;\n  color: #403e3e; }\n\n.page-margins {\n  margin: 10; }\n\n.page-side-margins {\n  margin-left: 10;\n  margin-right: 10; }\n\nSegmentedBar.segmented-bar {\n  selected-background-color: #CB0000;\n  border-width: 1;\n  border-color: #CB0000;\n  border-radius: 0;\n  padding: 0;\n  color: #CB0000; }\n\n.m-b-1 {\n  margin-bottom: 1px; }\n\n.text-muted {\n  color: #706D6D; }\n\n.text-italic {\n  font-style: italic; }\n\n.h2 {\n  background: #F1EFF0;\n  padding-left: 10;\n  color: #403e3e;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  margin: 15px 0 5px 0;\n  font-size: 18; }\n\n.body {\n  margin: 10; }\n", ""]);

;
    if (false) {}


/***/ }),

/***/ "./components/App.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_template_id_45ba5ed4_lang_html___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/App.vue?vue&type=template&id=45ba5ed4&lang=html&");
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/App.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _App_vue_vue_type_template_id_45ba5ed4_lang_html___WEBPACK_IMPORTED_MODULE_0__["render"],
  _App_vue_vue_type_template_id_45ba5ed4_lang_html___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "components/App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/App.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/App.vue?vue&type=style&index=0&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/App.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/App.vue?vue&type=template&id=45ba5ed4&lang=html&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_45ba5ed4_lang_html___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/App.vue?vue&type=template&id=45ba5ed4&lang=html&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_45ba5ed4_lang_html___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_45ba5ed4_lang_html___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/DrawerContent.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DrawerContent_vue_vue_type_template_id_38f02606_scoped_true_lang_html___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/DrawerContent.vue?vue&type=template&id=38f02606&scoped=true&lang=html&");
/* harmony import */ var _DrawerContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/DrawerContent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _DrawerContent_vue_vue_type_style_index_0_id_38f02606_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/DrawerContent.vue?vue&type=style&index=0&id=38f02606&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DrawerContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DrawerContent_vue_vue_type_template_id_38f02606_scoped_true_lang_html___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DrawerContent_vue_vue_type_template_id_38f02606_scoped_true_lang_html___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "38f02606",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "components/DrawerContent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/DrawerContent.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DrawerContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/DrawerContent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DrawerContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/DrawerContent.vue?vue&type=style&index=0&id=38f02606&scoped=true&lang=scss&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DrawerContent_vue_vue_type_style_index_0_id_38f02606_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/lib/loader.js!../node_modules/vue-loader/lib/index.js?!./components/DrawerContent.vue?vue&type=style&index=0&id=38f02606&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DrawerContent_vue_vue_type_style_index_0_id_38f02606_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DrawerContent_vue_vue_type_style_index_0_id_38f02606_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DrawerContent_vue_vue_type_style_index_0_id_38f02606_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DrawerContent_vue_vue_type_style_index_0_id_38f02606_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DrawerContent_vue_vue_type_style_index_0_id_38f02606_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/DrawerContent.vue?vue&type=template&id=38f02606&scoped=true&lang=html&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DrawerContent_vue_vue_type_template_id_38f02606_scoped_true_lang_html___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/DrawerContent.vue?vue&type=template&id=38f02606&scoped=true&lang=html&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DrawerContent_vue_vue_type_template_id_38f02606_scoped_true_lang_html___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DrawerContent_vue_vue_type_template_id_38f02606_scoped_true_lang_html___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/Header.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Header_vue_vue_type_template_id_1a9bb128___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Header.vue?vue&type=template&id=1a9bb128&");
/* harmony import */ var _Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Header.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Header_vue_vue_type_template_id_1a9bb128___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Header_vue_vue_type_template_id_1a9bb128___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "components/Header.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/Header.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Header.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/Header.vue?vue&type=template&id=1a9bb128&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_1a9bb128___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Header.vue?vue&type=template&id=1a9bb128&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_1a9bb128___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_1a9bb128___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/ListItem.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ListItem_vue_vue_type_template_id_30a598ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/ListItem.vue?vue&type=template&id=30a598ac&scoped=true&");
/* harmony import */ var _ListItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/ListItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ListItem_vue_vue_type_style_index_0_id_30a598ac_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/ListItem.vue?vue&type=style&index=0&id=30a598ac&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ListItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ListItem_vue_vue_type_template_id_30a598ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ListItem_vue_vue_type_template_id_30a598ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "30a598ac",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "components/ListItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/ListItem.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ListItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/ListItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ListItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/ListItem.vue?vue&type=style&index=0&id=30a598ac&lang=scss&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ListItem_vue_vue_type_style_index_0_id_30a598ac_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/lib/loader.js!../node_modules/vue-loader/lib/index.js?!./components/ListItem.vue?vue&type=style&index=0&id=30a598ac&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ListItem_vue_vue_type_style_index_0_id_30a598ac_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ListItem_vue_vue_type_style_index_0_id_30a598ac_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ListItem_vue_vue_type_style_index_0_id_30a598ac_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ListItem_vue_vue_type_style_index_0_id_30a598ac_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ListItem_vue_vue_type_style_index_0_id_30a598ac_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/ListItem.vue?vue&type=template&id=30a598ac&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListItem_vue_vue_type_template_id_30a598ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/ListItem.vue?vue&type=template&id=30a598ac&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListItem_vue_vue_type_template_id_30a598ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListItem_vue_vue_type_template_id_30a598ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/ModalForm.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ModalForm_vue_vue_type_template_id_44b97c74_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/ModalForm.vue?vue&type=template&id=44b97c74&scoped=true&");
/* harmony import */ var _ModalForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/ModalForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ModalForm_vue_vue_type_style_index_0_id_44b97c74_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/ModalForm.vue?vue&type=style&index=0&id=44b97c74&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ModalForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ModalForm_vue_vue_type_template_id_44b97c74_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ModalForm_vue_vue_type_template_id_44b97c74_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "44b97c74",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "components/ModalForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/ModalForm.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/ModalForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/ModalForm.vue?vue&type=style&index=0&id=44b97c74&lang=scss&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalForm_vue_vue_type_style_index_0_id_44b97c74_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/lib/loader.js!../node_modules/vue-loader/lib/index.js?!./components/ModalForm.vue?vue&type=style&index=0&id=44b97c74&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalForm_vue_vue_type_style_index_0_id_44b97c74_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalForm_vue_vue_type_style_index_0_id_44b97c74_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalForm_vue_vue_type_style_index_0_id_44b97c74_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalForm_vue_vue_type_style_index_0_id_44b97c74_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalForm_vue_vue_type_style_index_0_id_44b97c74_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/ModalForm.vue?vue&type=template&id=44b97c74&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalForm_vue_vue_type_template_id_44b97c74_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/ModalForm.vue?vue&type=template&id=44b97c74&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalForm_vue_vue_type_template_id_44b97c74_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalForm_vue_vue_type_template_id_44b97c74_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/ModalImage.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ModalImage_vue_vue_type_template_id_392f3f49_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/ModalImage.vue?vue&type=template&id=392f3f49&scoped=true&");
/* harmony import */ var _ModalImage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/ModalImage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ModalImage_vue_vue_type_style_index_0_id_392f3f49_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/ModalImage.vue?vue&type=style&index=0&id=392f3f49&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ModalImage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ModalImage_vue_vue_type_template_id_392f3f49_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ModalImage_vue_vue_type_template_id_392f3f49_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "392f3f49",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "components/ModalImage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/ModalImage.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalImage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/ModalImage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalImage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/ModalImage.vue?vue&type=style&index=0&id=392f3f49&lang=scss&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalImage_vue_vue_type_style_index_0_id_392f3f49_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/lib/loader.js!../node_modules/vue-loader/lib/index.js?!./components/ModalImage.vue?vue&type=style&index=0&id=392f3f49&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalImage_vue_vue_type_style_index_0_id_392f3f49_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalImage_vue_vue_type_style_index_0_id_392f3f49_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalImage_vue_vue_type_style_index_0_id_392f3f49_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalImage_vue_vue_type_style_index_0_id_392f3f49_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalImage_vue_vue_type_style_index_0_id_392f3f49_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/ModalImage.vue?vue&type=template&id=392f3f49&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalImage_vue_vue_type_template_id_392f3f49_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/ModalImage.vue?vue&type=template&id=392f3f49&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalImage_vue_vue_type_template_id_392f3f49_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalImage_vue_vue_type_template_id_392f3f49_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/SubHeader.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SubHeader_vue_vue_type_template_id_28fd73a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/SubHeader.vue?vue&type=template&id=28fd73a2&scoped=true&");
/* harmony import */ var _SubHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/SubHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SubHeader_vue_vue_type_style_index_0_id_28fd73a2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/SubHeader.vue?vue&type=style&index=0&id=28fd73a2&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SubHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SubHeader_vue_vue_type_template_id_28fd73a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SubHeader_vue_vue_type_template_id_28fd73a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "28fd73a2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "components/SubHeader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/SubHeader.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SubHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/SubHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SubHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/SubHeader.vue?vue&type=style&index=0&id=28fd73a2&lang=scss&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SubHeader_vue_vue_type_style_index_0_id_28fd73a2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/lib/loader.js!../node_modules/vue-loader/lib/index.js?!./components/SubHeader.vue?vue&type=style&index=0&id=28fd73a2&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SubHeader_vue_vue_type_style_index_0_id_28fd73a2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SubHeader_vue_vue_type_style_index_0_id_28fd73a2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SubHeader_vue_vue_type_style_index_0_id_28fd73a2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SubHeader_vue_vue_type_style_index_0_id_28fd73a2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SubHeader_vue_vue_type_style_index_0_id_28fd73a2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/SubHeader.vue?vue&type=template&id=28fd73a2&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubHeader_vue_vue_type_template_id_28fd73a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/SubHeader.vue?vue&type=template&id=28fd73a2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubHeader_vue_vue_type_template_id_28fd73a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubHeader_vue_vue_type_template_id_28fd73a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/TreatmentReferences.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TreatmentReferences_vue_vue_type_template_id_02a72e15___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/TreatmentReferences.vue?vue&type=template&id=02a72e15&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _TreatmentReferences_vue_vue_type_template_id_02a72e15___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TreatmentReferences_vue_vue_type_template_id_02a72e15___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "components/TreatmentReferences.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/TreatmentReferences.vue?vue&type=template&id=02a72e15&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TreatmentReferences_vue_vue_type_template_id_02a72e15___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/TreatmentReferences.vue?vue&type=template&id=02a72e15&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TreatmentReferences_vue_vue_type_template_id_02a72e15___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TreatmentReferences_vue_vue_type_template_id_02a72e15___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/Warning.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Warning_vue_vue_type_template_id_4f8b4bde_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Warning.vue?vue&type=template&id=4f8b4bde&scoped=true&");
/* harmony import */ var _Warning_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Warning.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Warning_vue_vue_type_style_index_0_id_4f8b4bde_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/Warning.vue?vue&type=style&index=0&id=4f8b4bde&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Warning_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Warning_vue_vue_type_template_id_4f8b4bde_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Warning_vue_vue_type_template_id_4f8b4bde_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4f8b4bde",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "components/Warning.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/Warning.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Warning_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Warning.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Warning_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/Warning.vue?vue&type=style&index=0&id=4f8b4bde&lang=scss&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Warning_vue_vue_type_style_index_0_id_4f8b4bde_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/lib/loader.js!../node_modules/vue-loader/lib/index.js?!./components/Warning.vue?vue&type=style&index=0&id=4f8b4bde&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Warning_vue_vue_type_style_index_0_id_4f8b4bde_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Warning_vue_vue_type_style_index_0_id_4f8b4bde_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Warning_vue_vue_type_style_index_0_id_4f8b4bde_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Warning_vue_vue_type_style_index_0_id_4f8b4bde_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Warning_vue_vue_type_style_index_0_id_4f8b4bde_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/Warning.vue?vue&type=template&id=4f8b4bde&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Warning_vue_vue_type_template_id_4f8b4bde_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Warning.vue?vue&type=template&id=4f8b4bde&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Warning_vue_vue_type_template_id_4f8b4bde_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Warning_vue_vue_type_template_id_4f8b4bde_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./filters.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-vue/dist/index.js");
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_vue__WEBPACK_IMPORTED_MODULE_0__);

nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a.filter('imageAssetPath', function (value) {
  return `~/assets/images/${value}`;
});

/***/ }),

/***/ "./package.json":
/***/ (function(module) {

module.exports = {"main":"app.js","android":{"v8Flags":"--expose_gc","markingMode":"none"}};

/***/ }),

/***/ "./pages/About.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _About_vue_vue_type_template_id_fc5aff78_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./pages/About.vue?vue&type=template&id=fc5aff78&scoped=true&");
/* harmony import */ var _About_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./pages/About.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _About_vue_vue_type_style_index_0_id_fc5aff78_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./pages/About.vue?vue&type=style&index=0&id=fc5aff78&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _About_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _About_vue_vue_type_template_id_fc5aff78_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _About_vue_vue_type_template_id_fc5aff78_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "fc5aff78",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "pages/About.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./pages/About.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./pages/About.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./pages/About.vue?vue&type=style&index=0&id=fc5aff78&lang=scss&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_fc5aff78_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/lib/loader.js!../node_modules/vue-loader/lib/index.js?!./pages/About.vue?vue&type=style&index=0&id=fc5aff78&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_fc5aff78_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_fc5aff78_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_fc5aff78_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_fc5aff78_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_fc5aff78_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./pages/About.vue?vue&type=template&id=fc5aff78&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_template_id_fc5aff78_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./pages/About.vue?vue&type=template&id=fc5aff78&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_template_id_fc5aff78_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_template_id_fc5aff78_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./pages/Explore.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Explore_vue_vue_type_template_id_00eab88a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./pages/Explore.vue?vue&type=template&id=00eab88a&scoped=true&");
/* harmony import */ var _Explore_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./pages/Explore.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Explore_vue_vue_type_style_index_0_id_00eab88a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./pages/Explore.vue?vue&type=style&index=0&id=00eab88a&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Explore_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Explore_vue_vue_type_template_id_00eab88a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Explore_vue_vue_type_template_id_00eab88a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "00eab88a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "pages/Explore.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./pages/Explore.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Explore_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./pages/Explore.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Explore_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./pages/Explore.vue?vue&type=style&index=0&id=00eab88a&scoped=true&lang=scss&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Explore_vue_vue_type_style_index_0_id_00eab88a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/lib/loader.js!../node_modules/vue-loader/lib/index.js?!./pages/Explore.vue?vue&type=style&index=0&id=00eab88a&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Explore_vue_vue_type_style_index_0_id_00eab88a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Explore_vue_vue_type_style_index_0_id_00eab88a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Explore_vue_vue_type_style_index_0_id_00eab88a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Explore_vue_vue_type_style_index_0_id_00eab88a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Explore_vue_vue_type_style_index_0_id_00eab88a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./pages/Explore.vue?vue&type=template&id=00eab88a&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Explore_vue_vue_type_template_id_00eab88a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./pages/Explore.vue?vue&type=template&id=00eab88a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Explore_vue_vue_type_template_id_00eab88a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Explore_vue_vue_type_template_id_00eab88a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./pages/FactSheet.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FactSheet_vue_vue_type_template_id_4e9e46ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./pages/FactSheet.vue?vue&type=template&id=4e9e46ec&scoped=true&");
/* harmony import */ var _FactSheet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./pages/FactSheet.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _FactSheet_vue_vue_type_style_index_0_id_4e9e46ec_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./pages/FactSheet.vue?vue&type=style&index=0&id=4e9e46ec&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _FactSheet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FactSheet_vue_vue_type_template_id_4e9e46ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FactSheet_vue_vue_type_template_id_4e9e46ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4e9e46ec",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "pages/FactSheet.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./pages/FactSheet.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FactSheet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./pages/FactSheet.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FactSheet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./pages/FactSheet.vue?vue&type=style&index=0&id=4e9e46ec&scoped=true&lang=scss&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FactSheet_vue_vue_type_style_index_0_id_4e9e46ec_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/lib/loader.js!../node_modules/vue-loader/lib/index.js?!./pages/FactSheet.vue?vue&type=style&index=0&id=4e9e46ec&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FactSheet_vue_vue_type_style_index_0_id_4e9e46ec_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FactSheet_vue_vue_type_style_index_0_id_4e9e46ec_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FactSheet_vue_vue_type_style_index_0_id_4e9e46ec_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FactSheet_vue_vue_type_style_index_0_id_4e9e46ec_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FactSheet_vue_vue_type_style_index_0_id_4e9e46ec_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./pages/FactSheet.vue?vue&type=template&id=4e9e46ec&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FactSheet_vue_vue_type_template_id_4e9e46ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./pages/FactSheet.vue?vue&type=template&id=4e9e46ec&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FactSheet_vue_vue_type_template_id_4e9e46ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FactSheet_vue_vue_type_template_id_4e9e46ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./pages/Home.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_7f245110_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./pages/Home.vue?vue&type=template&id=7f245110&scoped=true&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./pages/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Home_vue_vue_type_style_index_0_id_7f245110_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./pages/Home.vue?vue&type=style&index=0&id=7f245110&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_7f245110_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_7f245110_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7f245110",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "pages/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./pages/Home.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./pages/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./pages/Home.vue?vue&type=style&index=0&id=7f245110&scoped=true&lang=scss&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_7f245110_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/lib/loader.js!../node_modules/vue-loader/lib/index.js?!./pages/Home.vue?vue&type=style&index=0&id=7f245110&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_7f245110_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_7f245110_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_7f245110_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_7f245110_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_7f245110_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./pages/Home.vue?vue&type=template&id=7f245110&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_7f245110_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./pages/Home.vue?vue&type=template&id=7f245110&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_7f245110_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_7f245110_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./pages/Identify.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Identify_vue_vue_type_template_id_73b8caa5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./pages/Identify.vue?vue&type=template&id=73b8caa5&scoped=true&");
/* harmony import */ var _Identify_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./pages/Identify.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Identify_vue_vue_type_style_index_0_id_73b8caa5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./pages/Identify.vue?vue&type=style&index=0&id=73b8caa5&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Identify_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Identify_vue_vue_type_template_id_73b8caa5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Identify_vue_vue_type_template_id_73b8caa5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "73b8caa5",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "pages/Identify.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./pages/Identify.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Identify_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./pages/Identify.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Identify_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./pages/Identify.vue?vue&type=style&index=0&id=73b8caa5&lang=scss&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Identify_vue_vue_type_style_index_0_id_73b8caa5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/lib/loader.js!../node_modules/vue-loader/lib/index.js?!./pages/Identify.vue?vue&type=style&index=0&id=73b8caa5&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Identify_vue_vue_type_style_index_0_id_73b8caa5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Identify_vue_vue_type_style_index_0_id_73b8caa5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Identify_vue_vue_type_style_index_0_id_73b8caa5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Identify_vue_vue_type_style_index_0_id_73b8caa5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Identify_vue_vue_type_style_index_0_id_73b8caa5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./pages/Identify.vue?vue&type=template&id=73b8caa5&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Identify_vue_vue_type_template_id_73b8caa5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./pages/Identify.vue?vue&type=template&id=73b8caa5&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Identify_vue_vue_type_template_id_73b8caa5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Identify_vue_vue_type_template_id_73b8caa5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./pages/Treatment.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Treatment_vue_vue_type_template_id_baddffa2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./pages/Treatment.vue?vue&type=template&id=baddffa2&");
/* harmony import */ var _Treatment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./pages/Treatment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Treatment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Treatment_vue_vue_type_template_id_baddffa2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Treatment_vue_vue_type_template_id_baddffa2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "pages/Treatment.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./pages/Treatment.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Treatment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./pages/Treatment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Treatment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./pages/Treatment.vue?vue&type=template&id=baddffa2&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Treatment_vue_vue_type_template_id_baddffa2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./pages/Treatment.vue?vue&type=template&id=baddffa2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Treatment_vue_vue_type_template_id_baddffa2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Treatment_vue_vue_type_template_id_baddffa2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./pages/TreatmentDetail.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TreatmentDetail_vue_vue_type_template_id_0b9596e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./pages/TreatmentDetail.vue?vue&type=template&id=0b9596e0&");
/* harmony import */ var _TreatmentDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./pages/TreatmentDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TreatmentDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TreatmentDetail_vue_vue_type_template_id_0b9596e0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TreatmentDetail_vue_vue_type_template_id_0b9596e0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "pages/TreatmentDetail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./pages/TreatmentDetail.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TreatmentDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./pages/TreatmentDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TreatmentDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./pages/TreatmentDetail.vue?vue&type=template&id=0b9596e0&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TreatmentDetail_vue_vue_type_template_id_0b9596e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./pages/TreatmentDetail.vue?vue&type=template&id=0b9596e0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TreatmentDetail_vue_vue_type_template_id_0b9596e0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TreatmentDetail_vue_vue_type_template_id_0b9596e0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./router.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_Explore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./pages/Explore.vue");
/* harmony import */ var _pages_Identify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./pages/Identify.vue");
/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./pages/Home.vue");
/* harmony import */ var _pages_FactSheet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./pages/FactSheet.vue");
/* harmony import */ var _pages_Treatment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./pages/Treatment.vue");
/* harmony import */ var _pages_TreatmentDetail__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./pages/TreatmentDetail.vue");
/* harmony import */ var _pages_About__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./pages/About.vue");







const router = {
  explore: _pages_Explore__WEBPACK_IMPORTED_MODULE_0__["default"],
  identify: _pages_Identify__WEBPACK_IMPORTED_MODULE_1__["default"],
  home: _pages_Home__WEBPACK_IMPORTED_MODULE_2__["default"],
  factSheet: _pages_FactSheet__WEBPACK_IMPORTED_MODULE_3__["default"],
  treatment: _pages_Treatment__WEBPACK_IMPORTED_MODULE_4__["default"],
  treatmentDetail: _pages_TreatmentDetail__WEBPACK_IMPORTED_MODULE_5__["default"],
  about: _pages_About__WEBPACK_IMPORTED_MODULE_6__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),

/***/ "./shared/selected-page-service.js":
/***/ (function(module, exports, __webpack_require__) {

const {
  BehaviorSubject
} = __webpack_require__("../node_modules/rxjs/_esm5/index.js");

function SelectedPageService() {
  if (SelectedPageService._instance) {
    throw new Error("Use SelectedPageService.getInstance() instead of new.");
  } // Observable selectedPage source


  this._selectedPageSource = new BehaviorSubject(""); // Observable selectedPage stream

  this.selectedPage$ = this._selectedPageSource.asObservable();

  this.updateSelectedPage = function (selectedPage) {
    this._selectedPageSource.next(selectedPage);
  };
}

SelectedPageService.getInstance = function () {
  return SelectedPageService._instance;
};

SelectedPageService._instance = new SelectedPageService();
module.exports = SelectedPageService;

/***/ }),

/***/ "./shared/utils.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showDrawer", function() { return showDrawer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeDrawer", function() { return closeDrawer; });
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/tns-core-modules/application/application.js");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application__WEBPACK_IMPORTED_MODULE_0__);

const showDrawer = () => {
  let drawerNativeView = Object(tns_core_modules_application__WEBPACK_IMPORTED_MODULE_0__["getRootView"])();

  if (drawerNativeView && drawerNativeView.showDrawer) {
    drawerNativeView.showDrawer();
  }
};
const closeDrawer = () => {
  let drawerNativeView = Object(tns_core_modules_application__WEBPACK_IMPORTED_MODULE_0__["getRootView"])();

  if (drawerNativeView && drawerNativeView.showDrawer) {
    drawerNativeView.closeDrawer();
  }
};

/***/ }),

/***/ "./store.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-vue/dist/index.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/vuex/dist/vuex.esm.js");


vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vuex__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (new vuex__WEBPACK_IMPORTED_MODULE_1__["default"].Store({
  state: {
    species: [{
      "scientific_name": "Formica",
      "images": [{
        "file": "formica-1.jpg",
        "credit": "By AfroBrazilian - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=71217143"
      }, {
        "file": "formica-2.jpg",
        "credit": "By James Lindsey at Ecology of Commanster, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=7207181"
      }],
      "group": "Ants",
      "character_states": {
        "156": [157, 159],
        "203": [205],
        "206": [208],
        "207": [210, 211],
        "212": [214],
        "215": [217],
        "218": [221, 222, 223],
        "224": [226],
        "250": [252],
        "253": [254, 255],
        "256": [257],
        "153": [154],
        "161": [162, 163],
        "164": [165],
        "167": [169],
        "170": [171, 172],
        "173": [174, 175],
        "176": [177, 178],
        "179": [180, 181],
        "182": [184],
        "185": [187],
        "188": [190],
        "191": [192, 193, 194, 195, 196],
        "76": [77],
        "80": [81],
        "84": [93],
        "99": [101],
        "102": [103],
        "115": [117],
        "118": [120],
        "122": [124],
        "125": [126, 128, 129],
        "134": [136],
        "259": [261],
        "137": [139],
        "140": [142],
        "143": [145],
        "146": [148],
        "149": [152],
        "197": [199],
        "200": [202],
        "231": [232],
        "235": [236],
        "240": [242],
        "243": [245],
        "247": [248]
      },
      "common_name": "Wood Ants",
      "genus": "Formica",
      "species": "Multiple",
      "description": ["Wood Ants can be found throughout the UK and are widely distributed throughout Europe.", "As the name suggests commonly found in woodlands and mainly in areas where sunlight can reach them", "Colonies form large visible domed thatched mounds consisting of tree material", "Individuals can be bicolored red and brownish black, darker on the head.", "4-9mm in length", "Normally found in large groups", "Six legs as with insect orders and two visible antennae", "Males can have wings but commonly encountered females do not.", "Slender waist just before a rounded abdomen", "Large mandibles and retain the ability to spray formic acid"],
      "bites_stings": ["Wood Ants have been observed to spray people and animals with formic acid when their colonies are disturbed.", "Formic acid can be painful to soft body parts like eyes but should not hurt skin", "Multiple ants will spray acid at intruders so avoidance of nests is important", "Other than the spray and irritancy from bites Wood ants are generally harmless", "Localized symptoms from bites and acid spray have included itchiness, swelling and painful eyes", "Most skin lesions from bites are small and will disappear within a few days.", "If you are sprayed in the eye rinse copiously with water, or eye irrigating solution if available, for at least ten minutes. If symptoms are severe or you are concerned please visit an eye specialist or Doctor immediately"],
      "category": "Generally harmless, only aggressive if disturbed",
      "warning": "Spray formic acid, which can damage eyes",
      "resources": ["Social Insects Specialist Group 1996. Formica rufa. The IUCN Red List of Threatened Species 1996", "Goropashnaya, Anna V.; Fedorov, Vadim B.; Pamilo, Pekka (2004). \"Recent Speciation in the Formica Rufa Group Ants (Hymenoptera, Formicidae): Inference from Mitochondrial DNA Phylogeny\". Molecular Phylogenetics and Evolution. 32 (1): 198-206.", "Blum, M. S. 1992 Ant venoms: Chemical and pharmacological properties. Journal of Toxicology 11:115-164", "SUDARSKY RD. Ocular Injury Due to Formic Acid. Arch Ophthalmol. 1965;74(6):805-806.", "Klaff J, Milner SM, Farris S, Price LA. Chemical burn to the eyes. Eplasty. 11:ic16. Epub 2011 Nov 17. PubMed PMID: 22148080; PubMed Central PMCID: PMC3230139.", "Bolton B (2014) An online catalog of the ants of the world. http://antcat.org"]
    }, {
      "scientific_name": "Myrmica",
      "images": [{
        "file": "myrmica-1.jpg",
        "credit": "By Gary Alpert at English Wikipedia, CC BY 2.5, https://commons.wikimedia.org/w/index.php?curid=3387868"
      }, {
        "file": "myrmica-2.jpg",
        "credit": "By AfroBrazilian - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=74240949"
      }],
      "group": "Ants",
      "character_states": {
        "156": [157, 159],
        "203": [205],
        "206": [208],
        "207": [210, 211],
        "212": [214],
        "215": [217],
        "218": [221, 222, 223],
        "224": [226],
        "250": [252],
        "253": [254, 255],
        "256": [258],
        "153": [154],
        "161": [162, 163],
        "164": [165],
        "167": [169],
        "170": [171, 172],
        "173": [174, 175],
        "176": [177, 178],
        "179": [180, 181],
        "182": [184],
        "185": [187],
        "188": [190],
        "191": [192, 193, 194, 195, 196],
        "76": [77],
        "80": [81],
        "84": [93],
        "99": [101],
        "102": [103],
        "115": [117],
        "118": [120],
        "122": [123],
        "125": [126, 127, 128, 129],
        "134": [136],
        "259": [261],
        "137": [139],
        "140": [142],
        "143": [145],
        "146": [148],
        "149": [152],
        "197": [199],
        "200": [202],
        "231": [232],
        "235": [236],
        "240": [242],
        "243": [245],
        "247": [248]
      },
      "common_name": "Fire Ant",
      "genus": "Myrmica",
      "species": "Multiple",
      "description": ["Fire Ants can be found throughout the UK and are widely distributed throughout Europe.", "Commonly found in very damp environments such as wet meadows and long vegetation bordering rivers and lakes.", "Colonies can be formed from single or multiple nests closely situated", "Individuals can be reddish/yellowish brown in color, darker on the head.", "3-5mm in length", "Normally found in large groups", "Six legs as with insect orders and two visible antennae", "Males can have wings but commonly encountered females do not.", "Slender waist just before a rounded abdomen", "Front and back often smooth and shiny"],
      "bites_stings": ["Fire Ants have been observed to sting people and can be very aggressive in their nature.", "Stings are normally described as a burning itch or sharp pain", "Multiple stings can occur as individual Fire ants may sting repeatedly", "Other than the pain stings and bites from Fire ants are generally harmless", "Localized symptoms from stings have included itchiness, swelling and pain to touch", "Commonly most sting swellings are small bumps and will have disappeared within 7 days", "As with all stings, allergic reaction can occur when stung. If you suffer a major allergic reaction please dial 999 immediately. Symptoms of this can include breathing difficulties, dizziness and a swollen face/mouth."],
      "category": "Painful and aggressive stingers",
      "warning": "Severe Allergic reactions can occur",
      "resources": ["Heep, J et al Proteomic Analysis of the Venom from the Ruby Ant Myrmica rubra and the Isolation of a Novel Insecticidal Decapeptide. Insects 2019", "Wetterer, J. K., and Radchenko, A. G..  2010.  Worldwide spread of the ruby ant, Myrmica rubra(Hymenoptera: Formicidae). Myrmecol. News 14:", "Bolton B (2014) An online catalog of the ants of the world. http://antcat.org", "Touchard, A.; Aili, S.R.; Fox, E.G.P.; Escoubas, P.; Orivel, J.; Nicholson, G.M.; Dejean, A. The Biochemical Toxin Arsenal from Ant Venoms. Toxins 2016, 8, 30.", "Blum, M. S. 1992 Ant venoms: Chemical and pharmacological properties. Journal of Toxicology 11:115-164"]
    }, {
      "scientific_name": "Tetramorium",
      "images": [{
        "file": "tetramorium-0.jpg",
        "credit": "By AfroBrazilian - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=74241670"
      }, {
        "file": "tetramorium-2.jpg",
        "credit": "By Chetvorno - Own work, CC0, https://commons.wikimedia.org/w/index.php?curid=79356991"
      }, {
        "file": "tetramorium-3.jpg",
        "credit": "By AfroBrazilian - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=74241636"
      }],
      "group": "Ants",
      "character_states": {
        "156": [157, 159],
        "203": [205],
        "206": [208],
        "207": [210, 211],
        "212": [214],
        "215": [217],
        "218": [221, 222, 223],
        "224": [226],
        "250": [252],
        "253": [254, 255],
        "256": [258],
        "153": [154],
        "161": [162, 163],
        "164": [165],
        "167": [169],
        "170": [171, 172],
        "173": [174, 175],
        "176": [177, 178],
        "179": [180, 181],
        "182": [184],
        "185": [187],
        "188": [190],
        "191": [192, 193, 194, 195, 196],
        "76": [77],
        "80": [81],
        "84": [93],
        "99": [101],
        "102": [103],
        "115": [117],
        "118": [120],
        "122": [123],
        "125": [128, 129],
        "134": [136],
        "259": [261],
        "137": [139],
        "140": [142],
        "143": [145],
        "146": [148],
        "149": [152],
        "197": [199],
        "200": [202],
        "231": [232],
        "235": [236],
        "240": [242],
        "243": [245],
        "247": [248]
      },
      "common_name": "Pavement Ants",
      "genus": "Tetramorium",
      "species": "Multiple",
      "description": ["Pavement Ants can be found throughout the UK and are widely distributed throughout Europe and North America.", "As the name suggests commonly found in-between pavement/walkway/patio slabs", "Entrance holes surrounded by sandy piles can be commonly seen", "Individuals are black or dark brown.", "2-4mm in length", "Normally found in large groups/ trails in urban or rural areas", "Six legs as with insect orders and two visible antennae", "Males can have wings but commonly encountered females do not.", "Slender waist just before a rounded abdomen", "Large mandibles and retain the ability to spray formic acid"],
      "bites_stings": ["Pavement Ants have been observed to sting people but are usually not aggressive", "Stings are normally described as an annoyance or burning itch or sharp pain", "Multiple stings can occur as ants normally encountered in groups", "Other than the pain stings and bites from pavement ants are generally harmless", "Localized symptoms from stings have included itchiness, swelling and pain to touch", "Commonly most sting swellings are small bumps and will have disappeared within a few days", "As with all stings, allergic reaction can occur when stung. If you suffer a major allergic reaction please dial 999 immediately. Symptoms of this can include breathing difficulties, dizziness and a swollen face/mouth."],
      "category": "Generally harmless, only aggressive if disturbed",
      "warning": "Severe Allergic reactions can occur",
      "resources": ["Touchard, A.; Aili, S.R.; Fox, E.G.P.; Escoubas, P.; Orivel, J.; Nicholson, G.M.; Dejean, A. The Biochemical Toxin Arsenal from Ant Venoms. Toxins 2016, 8, 30.", "Wagner, H.C., Arthofer, W., Seifert, B., Muster, C., Steiner, F.M. & Schlick-Steiner, B.C. 2017. Light at the end of the tunnel: Integrative taxonomy delimits cryptic species in the Tetramorium caespitum complex. Myrmecological News 25: 95-129.", "Blum, M. S. 1992 Ant venoms: Chemical and pharmacological properties. Journal of Toxicology 11:115-164", "Bolton B (2014) An online catalog of the ants of the world. http://antcat.org", "Hita Garcia, F. & Fisher, B.L. 2014. The ant genus Tetramorium Mayr in the Afrotropical region (Hymenoptera, Formicidae, Myrmicinae): synonymisation of Decamorium Forel underTetramorium, and taxonomic revision of the T. decem species group. ZooKeys 411:67-103."]
    }, {
      "scientific_name": "Apis mellifera",
      "images": [{
        "file": "apis-mellifera-1.jpg",
        "credit": "By Ivar Leidus - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=50280119"
      }, {
        "file": "apis-mellifera-2.jpg",
        "credit": "By Richard Bartz, Munich Makro Freak & Beemaster Hubert Seibring, Munich which gave me advice and a protection suite ;) My dog cashed 6 bee-sticks on the nose, i cashed 4. - Own work, CC BY-SA 2.5, https://commons.wikimedia.org/w/index.php?curid=2202349"
      }],
      "group": "Bees",
      "character_states": {
        "156": [157],
        "203": [204],
        "206": [209],
        "207": [210],
        "212": [214],
        "215": [217],
        "218": [221, 222, 223],
        "224": [226],
        "250": [252],
        "253": [255],
        "256": [258],
        "153": [154],
        "161": [162],
        "164": [165, 166],
        "167": [169],
        "170": [171, 172],
        "173": [174, 175],
        "176": [177, 178],
        "179": [180, 181],
        "182": [184],
        "185": [187],
        "188": [190],
        "191": [192, 193, 194, 195, 196],
        "76": [77],
        "80": [81],
        "84": [91],
        "85": [96],
        "86": [97],
        "87": [108],
        "90": [111],
        "112": [114],
        "99": [101],
        "102": [103],
        "115": [117],
        "118": [120],
        "122": [123],
        "125": [127, 128],
        "134": [135],
        "259": [261],
        "137": [139],
        "140": [142],
        "143": [145],
        "146": [148],
        "149": [152],
        "197": [199],
        "200": [201],
        "231": [232],
        "235": [236, 237],
        "240": [242],
        "243": [245],
        "247": [248]
      },
      "common_name": "Honey Bees",
      "genus": "Apis",
      "species": "Mellifera",
      "description": ["Honey Bees, with human intervention, now found everywhere except Antarctica", "Very common, stings mostly due to common human interaction during warm months rather than aggression from the bees", "Individuals have yellow/orange and black stripes", "Worker bees are 15-20mm in length, drones can be slightly larger", "Normally found individually and commonly seen around flowers, vegetable blooms, eating areas, food establishments, orchards", "Wings for flight and characteristic 'buzzing' sound present", "Six legs as with insect orders and two visible antennae", "Slender waist just before a rounded abdomen", "Possess Barbed stinger that can only be used once"],
      "bites_stings": ["Remove stinger if attached to skin as soon as possible", "Honey Bees sting many people every year but are usually not aggressive", "Stings are normally described as a sharp pain", "Stinger is left behind attached in the skin which should be removed as soon as possible", "Single stings normally occur", "Other than the pain stings from Honey bees are generally harmless", "Localized symptoms from stings have included itchiness, swelling and pain to touch", "Commonly most sting swellings have a small central white spot surrounded by a red circle and will have disappeared within 7 days", "As with all stings, allergic reaction can occur when stung. If you suffer a major allergic reaction please dial 999 immediately. Symptoms of this can include breathing difficulties, dizziness and a swollen face/mouth."],
      "category": "Generally harmless, only sting when they feel threatened",
      "warning": "Severe Allergic reactions can occur",
      "resources": ["Ju\u0308rgen T. 2008. The Buzz about Bees: Biology of a Superorganism. Springer-Verlag, Berlin Heiderberg, Germany. 284 pp.", "Vetter RS, Visscher PK, Camazine S. Mass envenomations by honey bees and wasps. West J Med 1999; 170:223.", "Visscher PK, Vetter RS, Camazine S. Removing bee stings. Lancet 1996; 348:301.", "Winston ML. 1987. The Biology of the Honey Bee. Harvard University Press, Cambridge, Massachusetts, USA. 281 pp.", "Golden DB, Demain J, Freeman T, et al. Stinging insect hypersensitivity: A practice parameter update 2016. Ann Allergy Asthma Immunol 2017; 118:28", "Jaffe\u0301, R., Dietemann, V., Allsopp, M.H., Costa, C., Crewe, R.M., Dall'Olio, R., De la Ru\u0301a, P., El-Niweiri, M.A., Fries, I., Kezic, N., Meusel, M.S., Paxton, R.J., Shaibi, T., Stolle, E. and Moritz, R.F. 2010. Estimating the density of honeybee colonies across their natural range to fill the gap in pollinator decline censuses. Conservation Biology 24(2): 583-593."]
    }, {
      "scientific_name": "Bombus",
      "images": [{
        "file": "bombus-1.jpg",
        "credit": "By \u00a9entomartIn case of publication or commercial use, Entomart wishes then to be warned (http://www.entomart.be/contact.html), but this without obligation. Thank you., Attribution, https://commons.wikimedia.org/w/index.php?curid=632626"
      }, {
        "file": "bombus-2.jpg",
        "credit": "By Ivar Leidus - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=49931279"
      }],
      "group": "Bees",
      "character_states": {
        "156": [157],
        "203": [204],
        "206": [209],
        "207": [210],
        "212": [214],
        "215": [217],
        "218": [221, 222, 223],
        "224": [226],
        "250": [252],
        "253": [255],
        "256": [258],
        "153": [154],
        "161": [162],
        "164": [165, 166],
        "167": [169],
        "170": [171, 172],
        "173": [174, 175],
        "176": [177, 178],
        "179": [180, 181],
        "182": [184],
        "185": [187],
        "188": [190],
        "191": [192, 193, 194, 195, 196],
        "76": [77],
        "80": [81],
        "84": [91],
        "85": [96],
        "86": [97],
        "87": [108],
        "90": [111],
        "112": [114],
        "99": [101],
        "102": [103],
        "115": [116, 117],
        "118": [120],
        "122": [123],
        "125": [126, 127, 128],
        "134": [135],
        "259": [261],
        "137": [139],
        "140": [142],
        "143": [145],
        "146": [148],
        "149": [152],
        "197": [199],
        "200": [201],
        "231": [232],
        "235": [236, 237],
        "240": [242],
        "243": [245],
        "247": [248, 249]
      },
      "common_name": "Bumble Bees",
      "genus": "Bombus",
      "species": "Multiple",
      "description": ["Multiple species of Bumble Bees found worldwide including many in the UK", "Very common, stings mostly due to common human interaction during warm months rather than aggression from the bees", "Individuals have yellow/orange and black stripes", "Bees are 20mm in length or more and can look 'furry' due to body hairs", "Normally found individually and commonly seen around flowers, vegetable blooms, eating areas, food establishments, orchards", "Wings for flight and characteristic 'buzzing' sound present", "Six legs as with insect orders and two visible antennae", "More rounded appearance compared to honey bees", "Possess Barbed stinger that can only be used once"],
      "bites_stings": ["Remove stinger if attached to skin as soon as possible", "Bumble Bees sting many people every year but are usually not aggressive", "Stings are normally described as a sharp pain", "Stinger is left behind attached in the skin which should be removed as soon as possible", "Single stings normally occur", "Other than the pain, stings from Bumble bees are generally harmless", "Localized symptoms from stings have included itchiness, swelling and pain to touch", "Commonly most sting swellings have a small central white spot surrounded by a red circle and will have disappeared within 7 days", "As with all stings, allergic reaction can occur when stung. If you suffer a major allergic reaction please dial 999 immediately. Symptoms of this can include breathing difficulties, dizziness and a swollen face/mouth."],
      "category": "Generally harmless, not as aggressive or numerous as honey bees",
      "warning": "Severe Allergic reactions can occur",
      "resources": ["Ju\u0308rgen T. 2008. The Buzz about Bees: Biology of a Superorganism. Springer-Verlag, Berlin Heiderberg, Germany. 284 pp.", "Visscher PK, Vetter RS, Camazine S. Removing bee stings. Lancet 1996; 348:301.", "Golden DB, Demain J, Freeman T, et al. Stinging insect hypersensitivity: A practice parameter update 2016. Ann Allergy Asthma Immunol 2017; 118:28", "Williams, P. H., Cameron, S. A., Hines, H. M., Cederberg, B. & Rasmont, P. 2008. A simplified subgeneric classification of the bumblebees (genus Bombus). Apidologie 39: 46-74.", "Williams, P. H.,  et al 2012. Unveiling cryptic species of the bumblebee subgenus Bombus s. str. world-wide with COI barcodes (Hymenoptera: Apidae). Systematics and Biodiversity 10: 21-56"]
    }, {
      "scientific_name": "Lytta vesicatoria",
      "images": [{
        "file": "lytta-vesicatoria-1.jpg",
        "credit": " Siga - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=15982272"
      }, {
        "file": "lytta-vesicatoria-2.jpg",
        "credit": "By Stefanie Hamm - Own work, Public Domain, https://commons.wikimedia.org/w/index.php?curid=2201015"
      }],
      "group": "Beetles",
      "character_states": {
        "156": [159],
        "203": [205],
        "206": [209],
        "207": [211],
        "212": [213, 214],
        "215": [217],
        "218": [221, 222, 223],
        "224": [225],
        "250": [252],
        "253": [255],
        "256": [257],
        "153": [154],
        "161": [162],
        "164": [165],
        "167": [169],
        "170": [171, 172],
        "173": [174, 175],
        "176": [177, 178],
        "179": [181],
        "182": [184],
        "185": [187],
        "188": [190],
        "191": [192, 193],
        "76": [77],
        "80": [81],
        "84": [91],
        "85": [95],
        "86": [106],
        "87": [109],
        "90": [111],
        "112": [114],
        "99": [101],
        "102": [103],
        "115": [117],
        "118": [120],
        "122": [124],
        "125": [130],
        "134": [136],
        "259": [261],
        "137": [139],
        "140": [142],
        "143": [145],
        "146": [147],
        "149": [152],
        "197": [199],
        "200": [202],
        "231": [232],
        "235": [236],
        "240": [241, 242],
        "243": [244, 245],
        "247": [249]
      },
      "common_name": "Spanish Fly",
      "genus": "Lytta",
      "species": "Vesicatoria",
      "description": ["Spanish Flies are currently found in the south of the UK, Europe and Northern Asia", "Part of the blister beetle family", "Commonly found individually on leaves from plant species like willow, elm and ash", "Individuals are iridescent green/gold in color", "20mm in length", "Six legs as with insect orders and two visible antennae", "Wings present underneath their green wing cases", "Slender looking and soft bodied", "Exterior can appear shiny and metallic looking"],
      "bites_stings": ["Spanish Fly release a milky fluid, consisting of Cantharidin, orally and from their joints", "Cantharidin penetrates skin and causes blister formation within hours", "Blisters can form when handling live beetles or contact with crushed bodies", "Cantharidin is also extremely toxic if ingested", "Localized symptoms from fluid includes tingling, burning and blister formation", "Commonly most blisters are small and will have disappeared within 7-10 days", "If ingested severe toxicity can occur. If you ingest a Spanish fly or its fluid please contact a medical professional or dial 999 immediately. Small amounts can cause nausea, diarrhea and vomiting and abdominal cramps. Large amounts can be extremely serious and can cause kidney failure, cardiorespiratory collapse, coma and death"],
      "category": "Harmful",
      "warning": "Milky fluid released by beetle is highly toxic on skin and if ingested",
      "resources": ["\"Lytta vesicatoria (Linnaeus, 1758)\". UK Beetle Recording. NERC- Centre for Ecology & Hydrology", "Presto, A.J. and Muecke, E.C., (1970) A dose of Spanish fly, JAMA, 214, 591-592", "Evans, D. (2011). Lytta vesicatoria (Linnaeus) (Meloidae) in Dorset. The Coleopterist 20(3): 147", "Gelmietti C GR. Paederus dermatitis: An easy diagnosable but misdiagnosed eruption. Eur. J. Pediatr. 1993;153:6-8", "K FJaK. Paederus, sensu lato (Coleoptera: Staphylinidae): Natural history and medical importance. J. Med. Entomol. 1987;24:155-191", "Lehman, C.F., Pipkin, J.L., and Ressmann, A.C, Blister beetle dermatitis, Arch Dermatol., 71, 36-41, 1955"]
    }, {
      "scientific_name": "Paederus littoralis",
      "images": [{
        "file": "paederus-littoralis-1.jpg",
        "credit": "By Alvesgaspar - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=54097948"
      }, {
        "file": "paederus-littoralis-2.jpg",
        "credit": "By \u00a9entomartIn case of publication or commercial use, Entomart wishes then to be warned (http://www.entomart.be/contact.html), but this without obligation. Thank you., Attribution, https://commons.wikimedia.org/w/index.php?curid=866837"
      }],
      "group": "Beetles",
      "character_states": {
        "156": [159],
        "203": [205],
        "206": [209],
        "207": [211],
        "212": [213, 214],
        "215": [217],
        "218": [219, 220, 221, 222, 223],
        "224": [225],
        "250": [252],
        "253": [255],
        "256": [257],
        "153": [154],
        "161": [162],
        "164": [165],
        "167": [169],
        "170": [172],
        "173": [175],
        "176": [177, 178],
        "179": [181],
        "182": [184],
        "185": [187],
        "188": [190],
        "191": [192, 193],
        "76": [77],
        "80": [81],
        "84": [91],
        "85": [95],
        "86": [107],
        "87": [109],
        "90": [111],
        "112": [114],
        "99": [101],
        "102": [103],
        "115": [117],
        "118": [120],
        "122": [124],
        "125": [126, 128, 133],
        "134": [135],
        "259": [261],
        "137": [139],
        "140": [142],
        "143": [145],
        "146": [147],
        "149": [152],
        "197": [199],
        "200": [202],
        "231": [232],
        "235": [236],
        "240": [242],
        "243": [245],
        "247": [249]
      },
      "common_name": "Rove Beetle",
      "genus": "Paederus",
      "species": "Littoralis",
      "description": ["Rove beetles are currently widely distributed throughout the world", "Rove beetle is the common name for the family to which many species belong", "Commonly found in moist environments such as watered farmland and flood plains", "Individuals appear striped with alternating blue/black and orange/red colouration", "10mm in length", "Six legs as with insect orders and two visible antennae", "Wings present underneath their dark blue/black wing cases", "Slender looking and soft bodied", "Exterior can appear shiny and metallic looking"],
      "bites_stings": ["Rove beetles contain a toxin, called Pederin, within their bodies - specifically haemolyph", "Pederin affects skin and can cause a red rash and blister formation after 1 to 2 days", "Blisters can form when a beetle is crushed or squashed on the skin, releasing the toxin", "If Pederin gets into the eye it can cause profound swelling, conjunctivitis, corneal erosion and in some cases blindness", "Localized symptoms from fluid includes tingling, burning and blister formation", "Commonly most blisters are small but rashes can persist for months", "If ingested toxicity can occur. If you ingest a rove beetle or its fluid please contact a medical professional or dial 999 immediately. Pederin can cause irritation and damage to the lining of the gastrointestinal tract and has caused toxicosis in horses/cattle who have ingested them", "If Pederin gets into your eyes rinse copiously with water and contact an eye specialist or other medical professional immediately"],
      "category": "Harmful",
      "warning": "Crushed beetles cause skin and eye damage",
      "resources": ["LaDeau SL, Allan BF, Leisnham PT and Levy MZ, The ecological foundations of transmission potential and vector\u2010borne disease in urban landscapes. Funct Ecol 29:889-901 (2015)", "Mullen, Gary; Gary Richard Mullen; Lance Durden (2009). Medical and Veterinary Entomology. Academic Press. p. 102.", "Piel J. A polyketide synthase-peptide synthetase gene cluster from an uncultured bacterial symbiont of Paederus beetles. PNAS . 2002;99:14002-14007", "Gelmietti C GR. Paederus dermatitis: An easy diagnosable but misdiagnosed eruption. Eur. J. Pediatr. 1993;153:6-8", "K FJaK. Paederus, sensu lato (Coleoptera: Staphylinidae): Natural history and medical importance. J. Med. Entomol. 1987;24:155-191", "Lehman, C.F., Pipkin, J.L., and Ressmann, A.C, Blister beetle dermatitis, Arch Dermatol., 71, 36-41, 1955"]
    }, {
      "scientific_name": "Harmonia axyridis",
      "images": [{
        "file": "harmonia-axyridis-1.jpg",
        "credit": "By Bruce Marlin - Own work http://www.cirrusimage.com/beetles_multicolored_Asian_ladybird.htm, CC BY-SA 2.5, https://commons.wikimedia.org/w/index.php?curid=654833"
      }, {
        "file": "harmonia-axyridis-2.jpg",
        "credit": "By \u00a9entomartIn case of publication or commercial use, Entomart wishes then to be warned (http://www.entomart.be/contact.html), but this without obligation. Thank you., Attribution,https://commons.wikimedia.org/w/index.php?curid=815107"
      }],
      "group": "Beetles",
      "character_states": {
        "156": [157, 159],
        "203": [205],
        "206": [209],
        "207": [210],
        "212": [213, 214],
        "215": [217],
        "218": [221, 222, 223],
        "224": [226],
        "250": [252],
        "253": [255],
        "256": [258],
        "153": [154, 155],
        "161": [162],
        "164": [165],
        "167": [169],
        "170": [171, 172],
        "173": [174, 175],
        "176": [178],
        "179": [180, 181],
        "182": [184],
        "185": [187],
        "188": [190],
        "191": [192, 193, 194, 195, 196],
        "76": [77],
        "80": [81],
        "84": [91],
        "85": [96],
        "86": [97, 107],
        "87": [109],
        "90": [111],
        "112": [114],
        "99": [101],
        "102": [103],
        "115": [116, 117],
        "118": [120],
        "122": [124],
        "125": [126, 127, 128, 132, 133],
        "134": [136],
        "259": [260, 261],
        "137": [139],
        "140": [142],
        "143": [145],
        "146": [147],
        "149": [152],
        "197": [199],
        "200": [202],
        "231": [232],
        "235": [236],
        "240": [242],
        "243": [245],
        "247": [249]
      },
      "common_name": "Harlequin Ladybird",
      "genus": "Harmonia",
      "species": "Axyridis",
      "description": ["Harlequin ladybirds are native to Asia but have been introduced throughout the world", "Multiple common names including Halloween, Asian, Japanese and pumpkin ladybeetle", "Predator of aphids and so found in many gardens, crop fields and greenhouses globally", "Individuals mostly red/orange with black spots. Many colour variants do occur however", "5-10mm in length", "Six legs as with insect orders and two visible antennae", "Wings present underneath their red/black polka dot wing cases", "Domed looking with smooth transition from body to the head", "Exterior can appear shiny and metallic looking"],
      "bites_stings": ["Ladybirds rarely bite people and normally only when they feel threatened", "Initial bites can be very painful, described as sharp pain", "Bites can be very itchy but scratching should be avoided", "Skin infection can occur if scratched and damaged skin", "Foul smelling liquid can be released by the beetles, but not normally harmful", "Localized symptoms from bites have included itchiness with a single red/white bump", "Bite swellings normally disappear within 7days and can cause a red allergic skin reaction", "Their bites have been rarely observed to cause severe allergic reactions. If you suffer a major allergic reaction please dial 999 immediately. Symptoms of this can include breathing difficulties, dizziness and a swollen face/mouth"],
      "category": "Generally Harmless",
      "warning": "bites can be painful, foul smelling liquid released when threatened",
      "resources": ["R. L. Koch (2003). \"The multicolored Asian lady beetle, Harmonia axyridis: A review of its biology, uses in biological control, and non-target impacts\" (PDF). Journal of Insect Science. 3: 32.", "Mullen, Gary; Gary Richard Mullen; Lance Durden (2009). Medical and Veterinary Entomology. Academic Press. p. 102.", "http://www.harlequinsurvey.org/recognition_and_distinction.htm", "Southcott, R.V., Injuries from coleopteran, Med. J. Aust., 151, 654-659, 1989", "Frazier, C.A. and Brown, F.K, Insects and allergy, University of Oklahoma press, Norman, OK, 1980", "Marc Kenis; Helen E. Roy; Renate Zindel; Michael E. N. Majerus (2008). \"Current and potential management strategies against H. axyridis\". BioControl. 53 (1): 235-252.", "Ro\u0308hrich, C.R et al;(2011). \"Harmonine, a defence compound from the harlequin ladybird, inhibits mycobacterial growth and demonstrates multi-stage antimalarial activity\". Biol. Lett. 8 (2): 308-311."]
    }, {
      "scientific_name": "Anthocoris nemorum",
      "images": [{
        "file": "anthocoris-nemorum-1.jpg",
        "credit": "By Bj.schoenmakers - Own work, CC0, https://commons.wikimedia.org/w/index.php?curid=40663732"
      }, {
        "file": "anthocoris-nemorum-2.jpg",
        "credit": "By Bj.schoenmakers - Own work, CC0, https://commons.wikimedia.org/w/index.php?curid=41919442"
      }],
      "group": "Bugs (True Bugs)",
      "character_states": {
        "156": [157],
        "203": [205],
        "206": [209],
        "207": [210],
        "212": [213, 214],
        "215": [217],
        "218": [221, 222, 223],
        "224": [226],
        "250": [252],
        "253": [255],
        "256": [258],
        "153": [154],
        "161": [162],
        "164": [165],
        "167": [169],
        "170": [171, 172],
        "173": [174, 175],
        "176": [177, 178],
        "179": [181],
        "182": [184],
        "185": [187],
        "188": [190],
        "191": [192, 193, 194, 195, 196],
        "76": [77],
        "80": [81],
        "84": [91],
        "85": [95],
        "86": [105],
        "87": [110],
        "90": [111],
        "112": [113],
        "99": [101],
        "102": [104],
        "115": [117],
        "118": [120],
        "122": [124],
        "125": [128, 129, 132, 133],
        "134": [136],
        "259": [260, 261],
        "137": [139],
        "140": [142],
        "143": [145],
        "146": [147],
        "149": [152],
        "197": [199],
        "200": [202],
        "231": [232],
        "235": [236],
        "240": [241, 242],
        "243": [245],
        "247": [249]
      },
      "common_name": "Flowerbug",
      "genus": "Anthocoris",
      "species": "Nemorum",
      "description": ["Flowerbugs are found across Europe and northern Asia", "Very commonly seen in vegetation and prey mites and greenfly", "Characteristic wing colours with orange, black, white reflective wings", "Are around 3-4mm in length", "Normally found individually on leaf vegetation", "Black head with orange/brown legs also seen", "Six legs as with insect orders and two visible antennae", "Round, flattened exterior", "No stinger", "Straw-like mouth"],
      "bites_stings": ["Flower bugs rarely bite people and normally only when they feel threatened", "Initial bites can be very painful, described as sharp pain", "Bites can be very itchy but scratching should be avoided", "Skin infection can occur if scratched and damaged skin", "Normally single bite experienced and not multiple", "Localized symptoms from bites have included itchiness with a single red/white bump", "Bite swellings can be slow to heal, 7-10 days, and cause allergic skin reaction with red rash", "Their bites have been rarely observed to cause severe allergic reactions. If you suffer a major allergic reaction please dial 999 immediately. Symptoms of this can include breathing difficulties, dizziness and a swollen face/mouth."],
      "category": "Generally harmless, only bite when disturbed",
      "warning": "Painful bites and slow to heal",
      "resources": ["Arlott, N; Fitter R; Fitter A (1994). Collins Complete Guide to British Wildlife. Collins. p. 224", "DA Burns (2010). Rook's Textbook of Dermatology, Volume 1, Eighth Edition (PDF). John Wiley and Sons. p. 38.23. ISBN 1405161698.", "Steen CJ, Carbonaro PA, Schwartz RA. Arthropods in dermatology. J Am Acad Dermatol. 2004;50(6):819-842."]
    }, {
      "scientific_name": "Cimex lectularis",
      "images": [{
        "file": "cimex-lectularis-1.jpg",
        "credit": "By CDC/ Harvard University, Dr. Gary Alpert; Dr. Harold Harlan; Richard Pollack. Photo Credit: Piotr Naskrecki - http://phil.cdc.gov/phil, Public Domain, https://commons.wikimedia.org/w/index.php?curid=2119194"
      }, {
        "file": "cimex-lectularis-2.jpg",
        "credit": "By Jir\u030ci\u0301 Humpoli\u0301c\u030cek - Own work, CC BY-SA 2.5, https://commons.wikimedia.org/w/index.php?curid=2251393"
      }, {
        "file": "cimex-lectularis-3.jpg",
        "credit": "By Michael J. Raupach, Lars Hendrich, Stefan M. Kuchler, Fabian Deister, Je\u0301rome Morinie\u0301re, Martin M. Gossner - Building-Up of a DNA Barcode Library for True Bugs (Insecta: Hemiptera: Heteroptera) of Germany Reveals Taxonomic Uncertainties and Surprises Plos One Sept. 2014, DOI: 10.1371/journal.pone.0106940, CC BY 4.0, https://commons.wikimedia.org/w/index.php?curid=38893738"
      }],
      "group": "Bugs (True Bugs)",
      "character_states": {
        "156": [159],
        "203": [205],
        "206": [208],
        "207": [210, 211],
        "212": [213, 214],
        "215": [216],
        "218": [219, 220, 221, 222, 223],
        "224": [226],
        "250": [252],
        "253": [254, 255],
        "256": [258],
        "153": [155],
        "161": [162, 163],
        "164": [166],
        "167": [169],
        "170": [172],
        "173": [175],
        "176": [178],
        "179": [181],
        "182": [184],
        "185": [187],
        "188": [189, 190],
        "191": [192, 193, 194, 195, 196],
        "76": [77],
        "80": [81],
        "84": [93],
        "99": [101],
        "102": [103],
        "115": [116],
        "118": [120],
        "122": [124],
        "125": [129, 133],
        "134": [136],
        "259": [261],
        "137": [139],
        "140": [142],
        "143": [145],
        "146": [148],
        "149": [150],
        "197": [199],
        "200": [202],
        "231": [232, 234],
        "235": [236],
        "240": [242],
        "243": [245],
        "247": [249]
      },
      "common_name": "Bedbug",
      "genus": "Cimex",
      "species": "Lectularius",
      "description": ["Bed bugs found Worldwide, records dating over 2000 years", "Very common mostly feeding at night and hiding during the day", "Adults are commonly brown/orange, immature bugs can be white.", "Adults are 5mm in length, with a round flattened appearance", "Normally found in groups and commonly found in mattress, under floorboards, gaps in the wall or wallpaper, general furniture, carpet, wardrobes", "No wings, commonly transported in suitcases/clothing", "Six legs as with insect orders and two visible antennae", "Round, flattened exterior", "No stinger, previous life cycle stage skins and droppings can usually be seen"],
      "bites_stings": ["Pest services should be involved to eradicate from homes", "Bed bugs bite many people every year and require blood meals for their life cycle", "Initial bites normally painless, but afterwards small bumps in lines, rows, clusters seen", "Bites often described as 'breakfast, lunch, dinner bites' as appear in lines", "Bites can be very itchy but scratching should be avoided", "Skin infection can occur if scratched and damaged skin", "Localized symptoms from bites have included itchiness, small bumps and redness", "Commonly most bite swellings have a tiny central hole surrounded by a red bump and will have disappeared within 7 days", "Bites can be extremely irritating and can cause profound emotional problems", "Their bites have been rarely observed to cause severe allergic reactions. If you suffer a major allergic reaction please dial 999 immediately. Symptoms of this can include breathing difficulties, dizziness and a swollen face/mouth."],
      "category": "Harmful, regular biters causing nuisance and emotional effects",
      "warning": "Severe Allergic reactions can occur",
      "resources": ["Goddard J; deShazo R (2009). \"Bed bugs (Cimex lectularius) and clinical consequences of their bites\". Journal of the American Medical Association. 301 (13): 1358-1366.", "Goddard J. (2018) Health Effects of Bed Bugs. In: Infectious Diseases and Arthropods. Infectious Disease. Humana Press, Cham", "Gupta R, Sheikh A, Strachan DP, Anderson HR. Burden of allergic disease in the UK: secondary analyses of national databases. Clin Exp Allergy. 2004;34(4):520-526.", "Potter MF, Rosenberg B, Henriksen M. Bugs without borders: defining the global bed bug resurgence. Pest World, Sept/Oct. 2010:8-20.", "Steen CJ, Carbonaro PA, Schwartz RA. Arthropods in dermatology. J Am Acad Dermatol. 2004;50(6):819-842."]
    }, {
      "scientific_name": "Thaumetopoea processionea",
      "images": [{
        "file": "thaumetopoea-processionea-1.jpg",
        "credit": "By Christian Fischer, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=26351495"
      }, {
        "file": "thaumetopoea-processionea-2.jpg",
        "credit": "By Luc hoogenstein - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=74852057"
      }],
      "group": "Caterpillars",
      "character_states": {
        "156": [159],
        "203": [204],
        "206": [209],
        "207": [211],
        "212": [213, 214],
        "215": [216, 217],
        "218": [219, 220, 221, 222, 223],
        "224": [225],
        "250": [252],
        "253": [255],
        "256": [258],
        "153": [154],
        "161": [162],
        "164": [165],
        "167": [169],
        "170": [171, 172],
        "173": [174, 175],
        "176": [177, 178],
        "179": [181],
        "182": [184],
        "185": [187],
        "188": [190],
        "191": [192, 193],
        "76": [79],
        "80": [81],
        "84": [93],
        "99": [101],
        "102": [103],
        "115": [117],
        "118": [121],
        "122": [124],
        "125": [128, 129, 132],
        "134": [135, 136],
        "259": [260, 261],
        "137": [138],
        "140": [142],
        "143": [145],
        "146": [148],
        "149": [152],
        "197": [199],
        "200": [202],
        "231": [232, 234],
        "235": [236, 238],
        "240": [242],
        "243": [245],
        "247": [249]
      },
      "common_name": "Oak Processionary Caterpillars",
      "genus": "Thaumetopoea",
      "species": "Processionea",
      "description": ["These caterpillars are currently found in parts of London and south east England", "Range in UK is expanding due to a warming climate", "Almost exclusively found in and around Oak trees", "Seen in nose to tail marching lines or clusters on leaves", "Individuals look black and grey/white and look very hairy", "20mm-25mm in length", "Very long distinctive white hairs", "Much smaller finer hairs that cause symptoms are much shorter and less visible", "Slender looking and soft bodied", "Build white sack-like nests on branches and trunks of Oak trees"],
      "bites_stings": ["Caterpillars covered in thousands of tiny hairs which contain the toxin: Thaumetopoein", "The hairs commonly cause a very itchy bumpy skin rash which can be all over the body", "Hairs can also cause sore throat and eye problems including conjunctivitis", "Most seriously can cause breathing difficulty", "Localized symptoms from hairs includes itchiness, burning and rash formation", "Commonly most rashes only last hours but all should have disappeared within a few days", "If inhaled severe breathing problems can occur. If you inhale hairs and develop severe breathing difficulty please contact a medical professional or dial 999 immediately. Hairs getting into the eyes can also eye problems and an eye specialist should review these.", "See treatment pages for advice regarding hair removal and rash treatment."],
      "category": "Harmful",
      "warning": "Hairs can cause severe breathing difficulties",
      "resources": ["Mindlin MJ, de Waroux lePolain, Case S, Walsh B. The arrival of oak processionary moth, a novel cause of itchy dermatitis, in the UK: experience, lessons and recommendations. Pub Health. 2012;126(9):778-781.", "Rahlenbeck, S., & Utikal, J. (2015). The oak processionary moth: a new health hazard?. The British journal of general practice : the journal of the Royal College of General Practitioners, 65(637), 435-436. doi:10.3399/bjgp15X686341", "Rosen T. Caterpillar dermatitis. Dermatol Clin. 1990 Apr;8(2):245-52. Review.  PubMed PMID: 2191798.", "Diaz, J.H. The evolving global epidemiology, syndromic classification, management, and prevention of caterpillar envenomation, Am. J. Trop. Med. Hyg., 72(3), 347-357, 2005."]
    }, {
      "scientific_name": "Euproctis chrysorrhoea",
      "images": [{
        "file": "euproctis-chrysorrhoea-1.jpg",
        "credit": "By Olgierdr at Polish Wikipedia, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=3125944"
      }, {
        "file": "euproctis-chrysorrhoea-2.jpg",
        "credit": "By spacebirdy(also known as geimfygli\u00f0 (:> )=| made with Sternenlaus-spirit) - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=26066238"
      }, {
        "file": "euproctis-chrysorrhoea-3.jpg",
        "credit": "By Jiel Beaumadier (http://jiel.b.free.fr) - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=34698264"
      }],
      "group": "Caterpillars",
      "character_states": {
        "156": [159],
        "203": [204],
        "206": [209],
        "207": [211],
        "212": [213, 214],
        "215": [216, 217],
        "218": [219, 220, 221, 222, 223],
        "224": [225],
        "250": [252],
        "253": [255],
        "256": [258],
        "153": [154],
        "161": [162],
        "164": [165],
        "167": [169],
        "170": [171, 172],
        "173": [174, 175],
        "176": [177, 178],
        "179": [181],
        "182": [184],
        "185": [187],
        "188": [190],
        "191": [192, 193],
        "76": [79],
        "80": [81],
        "84": [93],
        "99": [101],
        "102": [103],
        "115": [117],
        "118": [121],
        "122": [124],
        "125": [126, 128, 129, 132, 133],
        "134": [135, 136],
        "259": [260, 261],
        "137": [138],
        "140": [142],
        "143": [145],
        "146": [148],
        "149": [152],
        "197": [199],
        "200": [202],
        "231": [232, 234],
        "235": [236, 238],
        "240": [242],
        "243": [245],
        "247": [249]
      },
      "common_name": "Brown Tail Caterpillars",
      "genus": "Euproctis",
      "species": "Chrysorrhoea",
      "description": ["These caterpillars are commonly found in Southern England and wales", "Range in UK is expanding due to a warming climate", "Commonly seen on cherry, plum, hawthorn, blackberry, blackthorn, rose plants", "Seen in groups and around webbing which is spun on the plants", "Individuals are black with white and red lines and two red dots at the back", "Look very hairy", "Up to 30-35mm in length", "Very long distinctive reddish brown hairs", "Much smaller finer hairs that cause symptoms are much shorter and less visible", "Slender looking and soft bodied", "Build white tent like nests on branch tip leaves and shoots"],
      "bites_stings": ["Caterpillars covered in hairs which are toxic", "The hairs commonly cause a very itchy bumpy skin rash which can be all over the body", "Hairs can also cause sore throat and eye problems including conjunctivitis", "Most seriously can cause breathing difficulty", "Localized symptoms from hairs includes itchiness, burning and rash formation", "Commonly most rashes only last hours but have been observed to last for a few weeks", "If inhaled severe breathing problems can occur. If you inhale hairs and develop severe breathing difficulty please contact a medical professional or dial 999 immediately. Hairs getting into eyes can also cause eye problems and an eye specialist should be seen.", "See treatment pages for advice regarding hair removal and rash treatment."],
      "category": "Harmful",
      "warning": "Hairs can cause severe breathing difficulties",
      "resources": ["Balit CR, Ptolemy HC, Geary MJ, Russell RC, Isbister GK (2001). \"Outbreak of caterpillar dermatitis caused by airborne hairs of the mistletoe browntail moth (Euproctis edwardsi)\". Med. J. Aust. 175 (11-12): 641-643.", "Blair, CP (1979). \"The browntail moth, its caterpillar and their rash\". Clin Experimental Dermatol. 4 (2): 215-222.", "Rosen T. Caterpillar dermatitis. Dermatol Clin. 1990 Apr;8(2):245-52. Review.  PubMed PMID: 2191798.", "Diaz, J.H. The evolving global epidemiology, syndromic classification, management, and prevention of caterpillar envenomation, Am. J. Trop. Med. Hyg., 72(3), 347-357, 2005."]
    }, {
      "scientific_name": "Scutigera coleoptrata",
      "images": [{
        "file": "scutigera-coleoptrata-1.jpg",
        "credit": "By Bpetheo - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=69419146"
      }, {
        "file": "scutigera-coleoptrata-2.jpg",
        "credit": "By Filip.vidinovski - using my camera, today, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=56636613"
      }, {
        "file": "scutigera-coleoptrata-3.jpg",
        "credit": "By Didier Descouens - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=26449955"
      }],
      "group": "Centipedes",
      "character_states": {
        "156": [157],
        "203": [205],
        "206": [209],
        "207": [210],
        "212": [214],
        "215": [217],
        "218": [221, 222, 223],
        "224": [226],
        "250": [252],
        "253": [255],
        "256": [258],
        "153": [154],
        "161": [162],
        "164": [165],
        "167": [169],
        "170": [171, 172],
        "173": [175],
        "176": [178],
        "179": [181],
        "182": [184],
        "185": [187],
        "188": [190],
        "191": [192, 193],
        "76": [79],
        "80": [81],
        "84": [93],
        "99": [101],
        "102": [103],
        "115": [117],
        "118": [121],
        "122": [124],
        "125": [127, 131],
        "134": [136],
        "259": [261],
        "137": [138],
        "140": [142],
        "143": [145],
        "146": [148],
        "149": [152],
        "197": [199],
        "200": [202],
        "231": [232, 234],
        "235": [236, 238],
        "240": [242],
        "243": [245],
        "247": [249]
      },
      "common_name": "House Centipede",
      "genus": "Scutigera",
      "species": "Coleoptrata",
      "description": ["House centipedes thought to originate in the Mediterranean but now worldwide spread", "Prefer damp environments to prevent dehydration like under rocks, compost heaps and bathrooms", "Mainly outdoors but will come into houses during the winter to avoid the cold", "Individuals yellowish/grey with dark strips running along its back and legs", "40mm in length", "Many legs, fragile and thin looking, one pair of legs per body segment", "Two very long visible antennae", "Legs different lengths and from above this gives it a rounded appearance", "Long slender body", "Long antennae can make it look around 100mm in length"],
      "bites_stings": ["Centipedes rarely bite people and normally only when they feel threatened", "Initial bites can be very painful, described as sharp pain", "Bites can become itchy but scratching should be avoided", "Skin infection can occur if scratched and damaged skin", "Two puncture holes sometimes seen at bite site", "Localized symptoms from bites have included itchiness with a single red/white bump", "Bite swellings normally disappear within 7days and can cause a red allergic skin reaction", "Their bites have been rarely observed to cause severe allergic reactions. If you suffer a major allergic reaction please dial 999 immediately. Symptoms of this can include breathing difficulties, dizziness and a swollen face/mouth"],
      "category": "Generally Harmless",
      "warning": "Bites can be painful",
      "resources": ["Haug et al. (2014) Haug JT, Haug C, Schweigert G, Sombke A. The evolution of centipede venom claws\u2014open questions and possible answers. Arthropod Structure & Developmen. 2014;43:5-16", "Rose Ombati, Lei Luo, Shilong Yang, Ren Lai (2018) Centipede envenomation: Clinical importance and the underlying molecular mechanisms Toxicon, Volume 154 pp. 60-68", "Sean P. Bush; Bradley O. King; Robert L. Norris; Scott A. Stockwell (2001). . . 12 (2): 93-99", "http://www.nhm.ac.uk/our-science/data/uk-species/species/scutigera_coleoptrata.html", "http://www.bmig.org.uk/species/scutigera-coleoptrata#tabs-0-tabs-2"]
    }, {
      "scientific_name": "Blatella germanica",
      "images": [{
        "file": "blatella-germanica-2.jpg",
        "credit": "By Lmbuga - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=6835727"
      }, {
        "file": "blatella-germanica-3.jpg",
        "credit": "By Copyright \u00a9 2007 David Monniaux - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=1611437"
      }],
      "group": "Cockroaches",
      "character_states": {
        "156": [157],
        "203": [205],
        "206": [209],
        "207": [210],
        "212": [214],
        "215": [217],
        "218": [221, 222, 223],
        "224": [226],
        "250": [252],
        "253": [255],
        "256": [258],
        "153": [154],
        "161": [162],
        "164": [166],
        "167": [169],
        "170": [172],
        "173": [175],
        "176": [178],
        "179": [181],
        "182": [183, 184],
        "185": [187],
        "188": [189, 190],
        "191": [192, 193, 194, 195, 196],
        "76": [77],
        "80": [81],
        "84": [91],
        "85": [95],
        "86": [105, 107],
        "87": [109],
        "90": [111],
        "112": [114],
        "99": [101],
        "102": [103],
        "115": [117],
        "118": [120],
        "122": [124],
        "125": [129],
        "134": [136],
        "259": [261],
        "137": [139],
        "140": [142],
        "143": [145],
        "146": [147],
        "149": [152],
        "197": [199],
        "200": [202],
        "231": [232],
        "235": [236],
        "240": [242],
        "243": [245],
        "247": [249]
      },
      "common_name": "German Cockroach",
      "genus": "Blatella",
      "species": "Germanica",
      "description": ["German cockroaches are cosmopolitan occurring throughout the world in most cities", "Adapted to living and breeding indoors", "Commonly seen where food, water and shelter available: restaurants, hotels and homes", "Can eat many things including: food, plant matter, glue, fabric, wallpaper, leather", "Individuals mostly a tan brown colour but can be dark brown/black", "10-15mm in length", "Six legs as with insect orders and two visible antennae", "Two pairs of wings present but normally moves on the ground", "Flattened looking and fast running", "Nocturnal and commonly hides in crevices and cracks near food"],
      "bites_stings": ["Cockroaches rarely bite people and normally only when they feel threatened", "Initial bites are described as feeble and often not that painful", "Bacteria found on their bodies includes food poisoning bacteria like salmonella", "Cockroach feces and cast skins can also cause allergies", "Localized symptoms from contaminated food is normally diarrhea and vomiting (D+V)", "D+V normally self limiting but see medical professional if concerned or you become unwell", "Allergies normally in the form of skin reaction, sneezing, runny nose, stuffy feeling eyes", "If you suffer a major allergic reaction please dial 999 immediately. Symptoms of this can include breathing difficulties, dizziness and a swollen face/mouth", "Bacterial disease or allergies best prevented by removing the cockroaches", "Many pest control options available including good sanitation, baits and pest services"],
      "category": "Bites generally harmless",
      "warning": "Can spread bacteria on their body parts and cause allergy",
      "resources": ["Alexander JB, Newton J, Crowe GA (1991). Distribution of oriental and German cockroaches, Blatta orientalis and Blattella germanica (Dictyoptera), in the United Kingdom. Medical and Veterinary Entomology, 5:395-402", "Baumholtz MA et al. (1997). The medical importance of cockroaches. International Journal of Dermatology, 36:90-96", "Bonnefoy X, Kampen H, Sweeney K (2008) Public health significance of urban pests. World Health Organization, Copenhagen", "Rosenstreich DL et al The role of cockroach allergy  and exposure to cockroach allergen in causing morbidity among inner-city children with asthma. N Engl J Med. 1997 May 8;336(19):1356-63. PubMed PMID: 9134876", "Tatfeng YM, Usuanlele MU, Orukpe A, Digban AK, Okodua M, Oviasogie F, Turay AA. Mechanical transmission of pathogenic organisms: the role of cockroaches. J Vector Borne Dis. 2005 Dec;42(4):129-34. PubMed PMID: 16457381"]
    }, {
      "scientific_name": "Blatta orientalis",
      "images": [{
        "file": "blatta-orientalis-1.jpg",
        "credit": "By Heinonlein - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=44377857"
      }, {
        "file": "blatta-orientalis-2.jpg",
        "credit": "By Bestiasonica - Pro\u0300pia (own work), CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=4249758"
      }, {
        "file": "blatta-orientalis-3.jpg",
        "credit": "By Bestiasonica - Pro\u0300pia (own work), CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=4249758"
      }],
      "group": "Cockroaches",
      "character_states": {
        "156": [157],
        "203": [205],
        "206": [209],
        "207": [210],
        "212": [214],
        "215": [217],
        "218": [221, 222, 223],
        "224": [226],
        "250": [252],
        "253": [255],
        "256": [258],
        "153": [154],
        "161": [162],
        "164": [166],
        "167": [169],
        "170": [172],
        "173": [175],
        "176": [178],
        "179": [181],
        "182": [183, 184],
        "185": [187],
        "188": [189, 190],
        "191": [192, 193, 194, 195, 196],
        "76": [77],
        "80": [81],
        "84": [91],
        "85": [95],
        "86": [107],
        "87": [109],
        "90": [111],
        "112": [114],
        "99": [101],
        "102": [103],
        "115": [117],
        "118": [120],
        "122": [124],
        "125": [128],
        "134": [136],
        "259": [261],
        "137": [139],
        "140": [142],
        "143": [145],
        "146": [147],
        "149": [152],
        "197": [199],
        "200": [202],
        "231": [232],
        "235": [236],
        "240": [242],
        "243": [245],
        "247": [249]
      },
      "common_name": "Oriental Cockroach",
      "genus": "Blatta",
      "species": "Orientalis",
      "description": ["Oriental cockroaches are cosmopolitan occurring throughout the world in most cities", "Adapted to living and breeding indoors", "Commonly seen where food, water and shelter available: restaurants, hotels and homes", "Can eat many things including: food, plant matter, glue, fabric, wallpaper, leather", "Individuals mostly black/dark brown colour and glossy appearance", "20-40mm in length", "Six legs as with insect orders and two visible antennae", "Wings present but moves on the ground", "Flattened looking and fast running", "Nocturnal and commonly hides in large groups around crevices and cracks near food"],
      "bites_stings": ["Cockroaches rarely bite people and normally only when they feel threatened", "Initial bites are described as feeble and often not that painful", "Bacteria found on their bodies includes food poisoning bacteria like salmonella", "Cockroach feces and cast skins can also cause allergies", "Localized symptoms from contaminated food is normally diarrhea and vomiting (D+V)", "D+V normally self limiting but see medical professional if concerned or you become unwell", "Allergies normally in the form of skin reaction, sneezing, runny nose, stuffy feeling eyes", "If you suffer a major allergic reaction please dial 999 immediately. Symptoms of this can include breathing difficulties, dizziness and a swollen face/mouth", "Bacterial disease or allergies best prevented by removing the cockroaches", "Many pest control options available including good sanitation, baits and pest services"],
      "category": "Bites generally harmless",
      "warning": "Can spread bacteria on their body parts and cause allergy",
      "resources": ["Alexander JB, Newton J, Crowe GA (1991). Distribution of oriental and German cockroaches, Blatta orientalis and Blattella germanica (Dictyoptera), in the United Kingdom. Medical and Veterinary Entomology, 5:395-402", "Baumholtz MA et al. (1997). The medical importance of cockroaches. International Journal of Dermatology, 36:90-96", "Bonnefoy X, Kampen H, Sweeney K (2008) Public health significance of urban pests. World Health Organization, Copenhagen", "Rosenstreich DL et al The role of cockroach allergy  and exposure to cockroach allergen in causing morbidity among inner-city children with asthma. N Engl J Med. 1997 May 8;336(19):1356-63. PubMed PMID: 9134876", "Tatfeng YM, Usuanlele MU, Orukpe A, Digban AK, Okodua M, Oviasogie F, Turay AA. Mechanical transmission of pathogenic organisms: the role of cockroaches. J Vector Borne Dis. 2005 Dec;42(4):129-34. PubMed PMID: 16457381"]
    }, {
      "scientific_name": "Periplaneta americana",
      "images": [{
        "file": "periplaneta-americana-1.jpg",
        "credit": "By American-cockroach.jpg: Gary Alpertderivative work: B kimmel (talk) - American-cockroach.jpg, CC BY 2.5, https://commons.wikimedia.org/w/index.php?curid=11949468"
      }, {
        "file": "periplaneta-americana-2.jpg",
        "credit": "By Bob Adams from Amanzimtoti, South Africa - American cockroach (Periplaneta americana), CC BY-SA 2.0, https://commons.wikimedia.org/w/index.php?curid=67870647"
      }],
      "group": "Cockroaches",
      "character_states": {
        "156": [157],
        "203": [205],
        "206": [209],
        "207": [210],
        "212": [214],
        "215": [217],
        "218": [221, 222, 223],
        "224": [226],
        "250": [252],
        "253": [255],
        "256": [258],
        "153": [154],
        "161": [162],
        "164": [166],
        "167": [169],
        "170": [172],
        "173": [175],
        "176": [178],
        "179": [181],
        "182": [183, 184],
        "185": [187],
        "188": [189, 190],
        "191": [192, 193, 194, 195, 196],
        "76": [77],
        "80": [81],
        "84": [91],
        "85": [95],
        "86": [105],
        "87": [109],
        "90": [111],
        "112": [114],
        "99": [101],
        "102": [103],
        "115": [117],
        "118": [120],
        "122": [124],
        "125": [129],
        "134": [136],
        "259": [261],
        "137": [139],
        "140": [142],
        "143": [145],
        "146": [147],
        "149": [152],
        "197": [199],
        "200": [202],
        "231": [232],
        "235": [236],
        "240": [242],
        "243": [245],
        "247": [249]
      },
      "common_name": "American Cockroach",
      "genus": "Periplaneta",
      "species": "Americana",
      "description": ["American cockroaches are cosmopolitan occurring throughout the world in most cities", "Adapted to living and breeding indoors", "Commonly seen where food, water and shelter available: restaurants, hotels and homes", "Can eat many things including: food, plant matter, glue, fabric, wallpaper, leather", "Individuals mostly reddish brown with yellowish region just behind the head", "Up to 50mm in length", "Six legs as with insect orders and two visible antennae", "Wings present but moves on the ground", "Flattened looking and fast running", "Nocturnal and commonly hides in large groups around crevices and cracks near food"],
      "bites_stings": ["Cockroaches rarely bite people and normally only when they feel threatened", "Initial bites are described as feeble and often not that painful", "Bacteria found on their bodies includes food poisoning bacteria like salmonella", "Cockroach feces and cast skins can also cause allergies", "Localized symptoms from contaminated food is normally diarrhea and vomiting (D+V)", "D+V normally self limiting but see medical professional if concerned or you become unwell", "Allergies normally in the form of skin reaction, sneezing, runny nose, stuffy feeling eyes", "If you suffer a major allergic reaction please dial 999 immediately. Symptoms of this can include breathing difficulties, dizziness and a swollen face/mouth", "Bacterial disease or allergies best prevented by removing the cockroaches", "Many pest control options available including good sanitation, baits and pest services"],
      "category": "Bites generally harmless",
      "warning": "Can spread bacteria on their body parts and cause allergy",
      "resources": ["Paul S, Khan AM, Baqui MA, Muhibullah M. Evaluation of the common cockroach Periplaneta americana (L.) as carrier of medically important bacteria. J Commun Dis. 1992 Dec;24(4):206-10. PubMed PMID: 1344954", "Baumholtz MA et al. (1997). The medical importance of cockroaches. International Journal of Dermatology, 36:90-96", "Bonnefoy X, Kampen H, Sweeney K (2008) Public health significance of urban pests. World Health Organization, Copenhagen", "Rosenstreich DL et al The role of cockroach allergy  and exposure to cockroach allergen in causing morbidity among inner-city children with asthma. N Engl J Med. 1997 May 8;336(19):1356-63. PubMed PMID: 9134876", "Tatfeng YM, Usuanlele MU, Orukpe A, Digban AK, Okodua M, Oviasogie F, Turay AA. Mechanical transmission of pathogenic organisms: the role of cockroaches. J Vector Borne Dis. 2005 Dec;42(4):129-34. PubMed PMID: 16457381", "Cochran, D. G. (1999). Cockroaches: Their Biology, Distribution and Control. Document WHO/CDS/ WHOPES/99.3. Geneva: World Health Organization"]
    }, {
      "scientific_name": "Forficula auricularia",
      "images": [{
        "file": "forficula-auricularia-1.jpg",
        "credit": "By Katja Schulz from Washington, D. C., USA - European Earwig, CC BY 2.0, https://commons.wikimedia.org/w/index.php?curid=49923243"
      }, {
        "file": "forficula-auricularia-2.jpg",
        "credit": "By Hectonichus - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=21657641"
      }],
      "group": "Earwig",
      "character_states": {
        "156": [157],
        "203": [205],
        "206": [209],
        "207": [210],
        "212": [214],
        "215": [217],
        "218": [221, 222, 223],
        "224": [226],
        "250": [252],
        "253": [255],
        "256": [258],
        "153": [154],
        "161": [162],
        "164": [165, 166],
        "167": [169],
        "170": [172],
        "173": [174, 175],
        "176": [178],
        "179": [181],
        "182": [183, 184],
        "185": [187],
        "188": [190],
        "191": [192, 193, 194, 195, 196],
        "76": [77],
        "80": [81],
        "84": [91],
        "85": [95],
        "86": [105],
        "87": [109],
        "90": [111],
        "112": [114],
        "99": [100],
        "102": [103],
        "115": [117],
        "118": [120],
        "122": [124],
        "125": [127, 128, 129],
        "134": [136],
        "259": [261],
        "137": [139],
        "140": [142],
        "143": [145],
        "146": [147],
        "149": [152],
        "197": [199],
        "200": [202],
        "231": [232],
        "235": [236],
        "240": [242],
        "243": [245],
        "247": [249]
      },
      "common_name": "European Earwig",
      "genus": "Forficula",
      "species": "Auricularia",
      "description": ["Common Earwigs are a cosmopolitan species distributed widely across the globe", "Nocturnal feeders that hide during the day in wall cracks, floorboards etc", "Feed mainly on plant matter and small insects", "Individuals are reddish brown in colour", "10-20mm in length", "Six legs", "Two pairs of wings but rarely used", "Two very long visible antennae", "Long slender body", "Very obvious forceps-like cerci on the base of its abdomen"],
      "bites_stings": ["Earwigs can very rarely pinch people with their abdominal cerci", "Initial pinches are described as very mild", "Despite common stories, earwigs do not bite or enter human ears", "Can release a foul smelling yellow liquid from their scent glands", "Can become household pests as can feed on house plants, flowers and garden vegetables", "If they become a pest please contact pest management services. The British Pest Control association website lists certified services available to hire."],
      "category": "Harmless",
      "warning": "Earwigs do not enter human ears",
      "resources": ["Bishopp, F.C (1961) Injury to man by earwigs, Proc Ent Soc. Wash 63, 114-116.", "Clausen CP (1978). \"Dermaptera Forficulidae\". Introduced parasites and predators of arthropod pests and weeds: A world review. Washington: U. S. Dept. Of Agriculture. pp. 15-18.", "Fisher, JR (1986). . Western Journal of Medicine. 145 (2): 245", "Gillott, Cedric (2005). Entomology (3 ed.). Dordrecht: Springer. pp. 175-179", "Burton, Maurice (January 2001).  (3 ed.). Marshall Cavendish Inc.", "Maher B, Logan D (2007). \"European earwigs, Forficula auricularia, and predation of scale insects in organic and conventionally managed kiwifruit\". New Zealand Plant Protection (60): 249-53.", "Walker KA (1997). Aggregation, courtship, and behavioural interactions in European earwigs, Forficula auricularia L. (Dermaptera: Forficulidae). PhD dissertation. Virginia Polytechnic Institute and State University."]
    }, {
      "scientific_name": "Ceratophyllus gallinae",
      "images": [{
        "file": "ceratophyllus-gallinae-1.jpg",
        "credit": "By Katja ZSM - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=38900351"
      }, {
        "file": "ceratophyllus-gallinae-2.jpg",
        "credit": "By AnemoneProjectors (talk) (Flickr) - ChickenUploaded by MaybeMaybeMaybe, CC BY-SA 2.0, https://commons.wikimedia.org/w/index.php?curid=22812532"
      }],
      "group": "Fleas",
      "character_states": {
        "156": [159],
        "203": [205],
        "206": [208],
        "207": [210],
        "212": [214],
        "215": [216, 217],
        "218": [220, 221, 222, 223],
        "224": [226],
        "250": [252],
        "253": [254, 255],
        "256": [258],
        "153": [154, 155],
        "161": [162, 163],
        "164": [166],
        "167": [168],
        "170": [172],
        "173": [175],
        "176": [178],
        "179": [181],
        "182": [184],
        "185": [187],
        "188": [190],
        "191": [192, 193, 194, 195, 196],
        "76": [77],
        "80": [82],
        "84": [93],
        "99": [101],
        "102": [103],
        "115": [246],
        "118": [120],
        "122": [124],
        "125": [126, 129],
        "134": [136],
        "259": [261],
        "137": [139],
        "140": [142],
        "143": [144],
        "146": [148],
        "149": [150, 152],
        "197": [199],
        "200": [202],
        "231": [232, 233],
        "235": [236, 238],
        "240": [242],
        "243": [245],
        "247": [249]
      },
      "common_name": "Hen Flea",
      "genus": "Ceratophyllus",
      "species": "Gallinae",
      "description": ["Bird fleas are extremely common, mostly cosmopolitan and occurs worldwide", "Feeds on many animals but commonly attacks poultry", "Commonly found in large groups", "Females lay many eggs after feeding in furniture, carpets, cat litter and bedding", "Individuals mostly brown or reddish brown in colour", "2-6mm in length", "Six legs as with insect orders", "Laterally Flattened bodies, Long hind legs normally used for jumping", "Move very quickly on skin and hair and can be observed jumping up to 40cm", "This jumping behavior can help identify insect as a flea"],
      "bites_stings": ["Fleas are regularly observed to bite people, especially poultry owners in the UK", "Initial bites are described as painless", "Where bitten extremely itchy small bumps may appear, normally in groups or lines", "Bites can also develop into blisters", "Bites often found below the knee, on the forearms and around the ankles in pet owners", "Localized symptoms from bites include itchiness, redness and discomfort", "Bites can become infected if scratched so avoiding this is very important", "Finding and treating the source of the fleas will normally prevent ongoing bites and infestation. Treating birds, treating your homes and involving pest services will all help", "If bites become infected, you feel unwell or you are concerned please contact a medical professional and pest management services"],
      "category": "Harmful",
      "warning": "Regularly bite people",
      "resources": ["Bitam, I., Dittmar, K., Parola, P., Whiting, M. F., & Raoult, D. (2010). Fleas and flea-borne diseases International Journal of Infectious Diseases, 14(8), e667-76", "Burns,D.A. (2004) Rook's textbook of dermatology. In: Burns,T., Breathnach,S., Cox,N., Griffiths,C. (Eds.) Diseases caused by arthropods and other noxious animals.Oxford: Blackwell Science., 33.1-33.63.", "R.S George (2008) Atlas of the Fleas (Siphonaptera) of Britain and Ireland.  98pp. Field Studies Council", "Pe\u0301rez-Osorio, C. E., Zavala-Vela\u0301zquez, J. E., Arias Leo\u0301n, J. J., & Zavala-Castro, J. E. (2008). Rickettsia felis as emergent global threat for humans. Emerging infectious diseases, 14(7), 1019-1023. doi:10.3201/eid1407.071656", "Williams SG, Sacci JB Jr, Schriefer ME, Andersen EM, Fujioka KK, Sorvillo FJ, et al. Typhus and typhuslike rickettsiae associated with opossums and their fleas in Los Angeles County, California. J Clin Microbiol 1992;30:1758-62", "A F Azad (1990) Epidemiology of Murine Typhus Annual Review of Entomology  35:1, 553-570", "Durden LA, Hinkle NC. (2009) Fleas (Siphonaptera) Medical and Veterinary Entomology.Academic Press, San Diego, USA;. pp. 115-136.", "Blagburn B.L., Dryden M.W. Biology, treatment, and control of flea and tick infestations. Vet. Clin. Small Anim. 2009;39:1173-1200", "Boase C., Kocisova A., Rettich F. Fleas and flea mangement. In: Dhang P., editor. Urban Insect Pests Sustainable Management Strategies. CAB International; Oxfordshire, UK: 2014. pp. 86-98.", "Beugnet F., Bourdeau P., Chalvet-Monfray K., Cozma V., Farkas R., Guillot J., Halos L., Joachim A., Losson B., Miro G., et al. Parasites of domestic owned cats in Europe: Co-infestations and risk factors. Parasites Vectors. 2014;7:291", "Dobler G., Pfeffer M. Fleas as parasites of the family Canidae. Parasites Vectors. 2011;4:139"]
    }, {
      "scientific_name": "Ctenocephalides canis",
      "images": [{
        "file": "ctenocephalides-canis-1.jpg",
        "credit": "By Katja ZSM - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=38959597"
      }, {
        "file": "ctenocephalides-canis-2.jpg",
        "credit": "By Skansken - Skansken, CC BY 3.0, https://commons.wikimedia.org/w/index.php?curid=11825108"
      }, {
        "file": "ctenocephalides-canis-3.jpg",
        "credit": "CC BY-SA 2.5 es, https://commons.wikimedia.org/w/index.php?curid=1796230"
      }],
      "group": "Fleas",
      "character_states": {
        "156": [159],
        "203": [205],
        "206": [208],
        "207": [210],
        "212": [214],
        "215": [216, 217],
        "218": [220, 221, 222, 223],
        "224": [226],
        "250": [252],
        "253": [254, 255],
        "256": [258],
        "153": [154, 155],
        "161": [162, 163],
        "164": [166],
        "167": [168],
        "170": [172],
        "173": [175],
        "176": [178],
        "179": [181],
        "182": [184],
        "185": [187],
        "188": [190],
        "191": [192, 193, 194, 195, 196],
        "76": [77],
        "80": [82],
        "84": [93],
        "99": [101],
        "102": [103],
        "115": [246],
        "118": [120],
        "122": [124],
        "125": [126, 129],
        "134": [136],
        "259": [261],
        "137": [139],
        "140": [142],
        "143": [144],
        "146": [148],
        "149": [150, 152],
        "197": [199],
        "200": [202],
        "231": [232, 233],
        "235": [236, 238],
        "240": [242],
        "243": [245],
        "247": [249]
      },
      "common_name": "Dog Flea",
      "genus": "Ctenocephalides",
      "species": "Canis",
      "description": ["Dog fleas are extremely common and occur worldwide in and around homes with pets", "Principally feeds on dogs but is often found on other animals as well such as cats", "Commonly found in large groups", "Females lay many eggs after feeding in furniture, carpets, cat litter and bedding", "Individuals mostly brown or reddish brown in colour", "2-6mm in length", "Six legs as with insect orders", "Laterally Flattened bodies, Long hind legs normally used for jumping", "Move very quickly on skin and hair and can be observed jumping up to 40cm", "This jumping behavior can help identify insect as a flea"],
      "bites_stings": ["Fleas are regularly observed to bite people, especially cat and dog owners in the UK", "Initial bites are described as painless", "Where bitten extremely itchy small bumps may appear, normally in groups or lines", "Bites can also develop into blisters", "Bites often found below the knee, on the forearms and around the ankles in pet owners", "Localized symptoms from bites include itchiness, redness and discomfort", "Bites can become infected if scratched so avoiding this is very important", "Finding and treating the source of the fleas will normally prevent ongoing bites and infestation. Treating pets, treating your homes and involving pest services will all help", "If bites become infected, you feel unwell or you are concerned please contact a medical professional and pest management services"],
      "category": "Harmful",
      "warning": "Regularly bite people; spread disease mainly in returning travellers",
      "resources": ["Bitam, I., Dittmar, K., Parola, P., Whiting, M. F., & Raoult, D. (2010). Fleas and flea-borne diseases International Journal of Infectious Diseases, 14(8), e667-76", "Burns,D.A. (2004) Rook's textbook of dermatology. In: Burns,T., Breathnach,S., Cox,N., Griffiths,C. (Eds.) Diseases caused by arthropods and other noxious animals.Oxford: Blackwell Science., 33.1-33.63.", "R.S George (2008) Atlas of the Fleas (Siphonaptera) of Britain and Ireland.  98pp. Field Studies Council", "Pe\u0301rez-Osorio, C. E., Zavala-Vela\u0301zquez, J. E., Arias Leo\u0301n, J. J., & Zavala-Castro, J. E. (2008). Rickettsia felis as emergent global threat for humans. Emerging infectious diseases, 14(7), 1019-1023. doi:10.3201/eid1407.071656", "Williams SG, Sacci JB Jr, Schriefer ME, Andersen EM, Fujioka KK, Sorvillo FJ, et al. Typhus and typhuslike rickettsiae associated with opossums and their fleas in Los Angeles County, California. J Clin Microbiol 1992;30:1758-62", "A F Azad (1990) Epidemiology of Murine Typhus Annual Review of Entomology  35:1, 553-570", "Durden LA, Hinkle NC. (2009) Fleas (Siphonaptera) Medical and Veterinary Entomology.Academic Press, San Diego, USA;. pp. 115-136.", "Blagburn B.L., Dryden M.W. Biology, treatment, and control of flea and tick infestations. Vet. Clin. Small Anim. 2009;39:1173-1200", "Boase C., Kocisova A., Rettich F. Fleas and flea mangement. In: Dhang P., editor. Urban Insect Pests Sustainable Management Strategies. CAB International; Oxfordshire, UK: 2014. pp. 86-98.", "Beugnet F., Bourdeau P., Chalvet-Monfray K., Cozma V., Farkas R., Guillot J., Halos L., Joachim A., Losson B., Miro G., et al. Parasites of domestic owned cats in Europe: Co-infestations and risk factors. Parasites Vectors. 2014;7:291", "Dobler G., Pfeffer M. Fleas as parasites of the family Canidae. Parasites Vectors. 2011;4:139"]
    }, {
      "scientific_name": "Ctenocephalides felis",
      "images": [{
        "file": "ctenocephalides-felis-1.jpg",
        "credit": "By Katja ZSM - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=38976825"
      }, {
        "file": "ctenocephalides-felis-2.jpg",
        "credit": "By Evanherk, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=1771604"
      }, {
        "file": "ctenocephalides-felis-3.jpg",
        "credit": "By Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01.jpg: Hisashi from Japanderivative work: Caspian blue - Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01.jpg, CC BY-SA 2.0, https://commons.wikimedia.org/w/index.php?curid=8313371"
      }],
      "group": "Fleas",
      "character_states": {
        "156": [159],
        "203": [205],
        "206": [208],
        "207": [210],
        "212": [214],
        "215": [216, 217],
        "218": [220, 221, 222, 223],
        "224": [226],
        "250": [252],
        "253": [254, 255],
        "256": [258],
        "153": [154, 155],
        "161": [162, 163],
        "164": [166],
        "167": [168],
        "170": [172],
        "173": [175],
        "176": [178],
        "179": [181],
        "182": [184],
        "185": [187],
        "188": [190],
        "191": [192, 193, 194, 195, 196],
        "76": [77],
        "80": [82],
        "84": [93],
        "99": [101],
        "102": [103],
        "115": [246],
        "118": [120],
        "122": [124],
        "125": [126, 129],
        "134": [136],
        "259": [261],
        "137": [139],
        "140": [142],
        "143": [144],
        "146": [148],
        "149": [150, 152],
        "197": [199],
        "200": [202],
        "231": [232, 233],
        "235": [236, 238],
        "240": [242],
        "243": [245],
        "247": [249]
      },
      "common_name": "Cat Flea",
      "genus": "Ctenocephalides",
      "species": "Felis",
      "description": ["Cat fleas are extremely common and occur worldwide in and around pet homes", "Principally feeds on cats but is often found on other animals as well such as dogs", "Commonly found in large groups", "Females lay many eggs after feeding in furniture, carpets, cat litter and bedding", "Individuals mostly brown or reddish brown in colour", "2-6mm in length", "Six legs as with insect orders", "Laterally Flattened bodies, Long hind legs normally used for jumping", "Move very quickly on skin and hair and can be observed jumping up to 40cm", "This jumping behavior can help identify insect as a flea"],
      "bites_stings": ["Fleas are regularly observed to bite people, especially cat and dog owners in the UK", "Initial bites are described as painless", "Where bitten extremely itchy small bumps may appear, normally in groups or lines", "Bites can also develop into blisters", "Bites often found below the knee, on the forearms and around the ankles in pet owners", "Localized symptoms from bites include itchiness, redness and discomfort", "Bites can become infected if scratched so avoiding this is very important", "Finding and treating the source of the fleas will normally prevent ongoing bites and infestation. Treating pets, treating your homes and involving pest services will all help", "If bites become infected, you feel unwell or you are concerned please contact a medical professional and pest management services"],
      "category": "Harmful",
      "warning": "Regularly bite people; spread disease mainly in returning travellers",
      "resources": ["Bitam, I., Dittmar, K., Parola, P., Whiting, M. F., & Raoult, D. (2010). Fleas and flea-borne diseases International Journal of Infectious Diseases, 14(8), e667-76", "Burns,D.A. (2004) Rook's textbook of dermatology. In: Burns,T., Breathnach,S., Cox,N., Griffiths,C. (Eds.) Diseases caused by arthropods and other noxious animals.Oxford: Blackwell Science., 33.1-33.63.", "R.S George (2008) Atlas of the Fleas (Siphonaptera) of Britain and Ireland.  98pp. Field Studies Council", "Pe\u0301rez-Osorio, C. E., Zavala-Vela\u0301zquez, J. E., Arias Leo\u0301n, J. J., & Zavala-Castro, J. E. (2008). Rickettsia felis as emergent global threat for humans. Emerging infectious diseases, 14(7), 1019-1023. doi:10.3201/eid1407.071656", "Williams SG, Sacci JB Jr, Schriefer ME, Andersen EM, Fujioka KK, Sorvillo FJ, et al. Typhus and typhuslike rickettsiae associated with opossums and their fleas in Los Angeles County, California. J Clin Microbiol 1992;30:1758-62", "A F Azad (1990) Epidemiology of Murine Typhus Annual Review of Entomology  35:1, 553-570", "Durden LA, Hinkle NC. (2009) Fleas (Siphonaptera) Medical and Veterinary Entomology.Academic Press, San Diego, USA;. pp. 115-136.", "Blagburn B.L., Dryden M.W. Biology, treatment, and control of flea and tick infestations. Vet. Clin. Small Anim. 2009;39:1173-1200", "Boase C., Kocisova A., Rettich F. Fleas and flea mangement. In: Dhang P., editor. Urban Insect Pests Sustainable Management Strategies. CAB International; Oxfordshire, UK: 2014. pp. 86-98.", "Beugnet F., Bourdeau P., Chalvet-Monfray K., Cozma V., Farkas R., Guillot J., Halos L., Joachim A., Losson B., Miro G., et al. Parasites of domestic owned cats in Europe: Co-infestations and risk factors. Parasites Vectors. 2014;7:291", "Dobler G., Pfeffer M. Fleas as parasites of the family Canidae. Parasites Vectors. 2011;4:139"]
    }, {
      "scientific_name": "Pulex irritans",
      "images": [{
        "file": "pulex-irritans-1.jpg",
        "credit": "By Katja ZSM - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=38976881"
      }, {
        "file": "pulex-irritans-2.jpg",
        "credit": "By David Ludwig - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=20265694"
      }, {
        "file": "pulex-irritans-3.jpg",
        "credit": "By Maslesha - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=50100603"
      }],
      "group": "Fleas",
      "character_states": {
        "156": [159],
        "203": [205],
        "206": [208],
        "207": [210],
        "212": [214],
        "215": [216, 217],
        "218": [220, 221, 222, 223],
        "224": [226],
        "250": [252],
        "253": [254, 255],
        "256": [258],
        "153": [154, 155],
        "161": [162, 163],
        "164": [166],
        "167": [169],
        "170": [172],
        "173": [175],
        "176": [178],
        "179": [181],
        "182": [184],
        "185": [187],
        "188": [189, 190],
        "191": [192, 193, 194, 195, 196],
        "76": [77],
        "80": [82],
        "84": [93],
        "99": [101],
        "102": [103],
        "115": [246],
        "118": [120],
        "122": [124],
        "125": [126, 129],
        "134": [136],
        "259": [261],
        "137": [139],
        "140": [142],
        "143": [144],
        "146": [148],
        "149": [150, 152],
        "197": [199],
        "200": [202],
        "231": [232, 233],
        "235": [236, 238],
        "240": [242],
        "243": [245],
        "247": [249]
      },
      "common_name": "Human Flea",
      "genus": "Pulex",
      "species": "Irritans",
      "description": ["Human fleas are extremely common, mostly cosmopolitan and occurs worldwide", "Feeds on many animals including humans, dogs, birds, cats etc.", "Commonly found in large groups", "Females lay many eggs after feeding in furniture, carpets, cat litter and bedding", "Individuals mostly brown or reddish brown in colour", "2-6mm in length", "Six legs as with insect orders", "Laterally Flattened bodies, Long hind legs normally used for jumping", "Move very quickly on skin and hair and can be observed jumping up to 40cm", "This jumping behavior can help identify insect as a flea"],
      "bites_stings": ["Fleas are regularly observed to bite people, especially cat and dog owners in the UK", "Initial bites are described as painless", "Where bitten extremely itchy small bumps may appear, normally in groups or lines", "Bites can also develop into blisters", "Bites often found below the knee, on the forearms and around the ankles in pet owners", "Localized symptoms from bites include itchiness, redness and discomfort", "Bites can become infected if scratched so avoiding this is very important", "Finding and treating the source of the fleas will normally prevent ongoing bites and infestation. Treating pets, treating your homes and involving pest services will all help", "If bites become infected, you feel unwell or you are concerned please contact a medical professional and pest management services"],
      "category": "Harmful",
      "warning": "Regularly bite people; spread disease mainly in returning travellers",
      "resources": ["Bitam, I., Dittmar, K., Parola, P., Whiting, M. F., & Raoult, D. (2010). Fleas and flea-borne diseases International Journal of Infectious Diseases, 14(8), e667-76", "Burns,D.A. (2004) Rook's textbook of dermatology. In: Burns,T., Breathnach,S., Cox,N., Griffiths,C. (Eds.) Diseases caused by arthropods and other noxious animals.Oxford: Blackwell Science., 33.1-33.63.", "R.S George (2008) Atlas of the Fleas (Siphonaptera) of Britain and Ireland.  98pp. Field Studies Council", "Pe\u0301rez-Osorio, C. E., Zavala-Vela\u0301zquez, J. E., Arias Leo\u0301n, J. J., & Zavala-Castro, J. E. (2008). Rickettsia felis as emergent global threat for humans. Emerging infectious diseases, 14(7), 1019-1023. doi:10.3201/eid1407.071656", "Williams SG, Sacci JB Jr, Schriefer ME, Andersen EM, Fujioka KK, Sorvillo FJ, et al. Typhus and typhuslike rickettsiae associated with opossums and their fleas in Los Angeles County, California. J Clin Microbiol 1992;30:1758-62", "A F Azad (1990) Epidemiology of Murine Typhus Annual Review of Entomology  35:1, 553-570", "Durden LA, Hinkle NC. (2009) Fleas (Siphonaptera) Medical and Veterinary Entomology.Academic Press, San Diego, USA;. pp. 115-136.", "Blagburn B.L., Dryden M.W. Biology, treatment, and control of flea and tick infestations. Vet. Clin. Small Anim. 2009;39:1173-1200", "Boase C., Kocisova A., Rettich F. Fleas and flea mangement. In: Dhang P., editor. Urban Insect Pests Sustainable Management Strategies. CAB International; Oxfordshire, UK: 2014. pp. 86-98.", "Beugnet F., Bourdeau P., Chalvet-Monfray K., Cozma V., Farkas R., Guillot J., Halos L., Joachim A., Losson B., Miro G., et al. Parasites of domestic owned cats in Europe: Co-infestations and risk factors. Parasites Vectors. 2014;7:291", "Dobler G., Pfeffer M. Fleas as parasites of the family Canidae. Parasites Vectors. 2011;4:139"]
    }, {
      "scientific_name": "Chrysops",
      "images": [{
        "file": "chrysops-1.jpg",
        "credit": "By Hugo.arg at the Samogitian language Wikipedia, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=8927080"
      }, {
        "file": "chrysops-2.jpg",
        "credit": "By Vengolis - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=42808259"
      }],
      "group": "Flies",
      "character_states": {
        "156": [157],
        "203": [205],
        "206": [208, 209],
        "207": [210, 211],
        "212": [213, 214],
        "215": [217],
        "218": [220, 221, 222, 223],
        "224": [226],
        "250": [251, 252],
        "253": [254, 255],
        "256": [258],
        "153": [154],
        "161": [162, 163],
        "164": [165, 166],
        "167": [169],
        "170": [171, 172],
        "173": [174, 175],
        "176": [177, 178],
        "179": [180, 181],
        "182": [184],
        "185": [187],
        "188": [190],
        "191": [192, 193, 196],
        "76": [77],
        "80": [81],
        "84": [91],
        "85": [95],
        "86": [97],
        "87": [108],
        "90": [89],
        "99": [101],
        "102": [103, 104],
        "115": [116, 117],
        "118": [120],
        "122": [124],
        "125": [127, 128, 129],
        "134": [135, 136],
        "259": [260, 261],
        "137": [139],
        "140": [142],
        "143": [145],
        "146": [148],
        "149": [152],
        "197": [199],
        "200": [201],
        "231": [232, 233],
        "235": [237],
        "240": [242],
        "243": [245],
        "247": [249]
      },
      "common_name": "Deer Fly",
      "genus": "Chrysops",
      "species": "Multiple",
      "description": ["Deer flies can be found throughout the UK", "Commonly found in very damp environments such as wet meadows and long vegetation bordering ponds, rivers and lakes.", "Mainly active early morning or late afternoon in late spring and summer months", "Individuals can be grey, black and yellowish with stripes and/or spots on the body.", "8-15mm in length", "Normally found individually", "Six legs as with insect orders and two visible antennae", "Have wings with dark markings", "Large brightly colored eyes"],
      "bites_stings": ["Deer flies have been observed to bite people and can be very aggressive in their nature", "Bites are normally described as very painful and deep", "Bites becoming secondarily infected is common so observe bites closely", "Bites can also bleed longer than other insect bites due to anti-clotting properties of saliva", "Localized symptoms from bites include itchiness, swelling and pain", "Commonly most bite swellings are few and will have disappeared within 7 days", "As with many bites, allergic reaction can occur when bitten. If you suffer a major allergic reaction please dial 999 immediately. Symptoms of this can include breathing difficulties, dizziness and a swollen face/mouth.", "If you notice the bite has become infected please see a medical professional immediately. Symptoms of this include increased redness, pain, swelling and pus from the bite"],
      "category": "Painful and aggressive biters",
      "warning": "Severe Allergic reactions can occur",
      "resources": ["Anderson JF. 1973. Biting behavior of saltmarsh deer flies (Diptera: Tabanidae). Annals of the Entomological Society of America 66: 21-23.", "McGarry JW, 1992. Abundance, Behaviour and Gonotrophic age structure of cattle-visiting Muscidae and Tabanidae in Cheshire. PhD thesis. Liverpool, UK: Liverpool University.", "Thompson RCK, 1986. The life history and ecology of the Common Clegg, Haematopota pluvialis in the west of Scotland. PhD thesis. Edinburgh, UK: University of Edinburgh.", "Chainey J.E. (1993) Horse-flies, deer-flies and clegs (Tabanidae). In: Lane R.P., Crosskey R.W. (eds) Medical Insects and Arachnids. Springer, Dordrecht", "Wall R., Shearer D. (1997) Adult flies (Diptera). In: Veterinary Entomology. Springer, Dordrecht", "Goddard, J., & Zhou, L. (2007). Physician's Guide to Arthropods of Medical Importance, 5th Edition. Emerging Infectious Diseases, 13(9), 1442. doi:10.3201/eid1309.070706"]
    }, {
      "scientific_name": "Culicoides impunctatus",
      "images": [{
        "file": "culicoides-impunctatus-1.jpg",
        "credit": "By Dunpharlain - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=58983154"
      }, {
        "file": "culicoides-impunctatus-2.jpg",
        "credit": "By Dunpharlain - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=79829802"
      }],
      "group": "Flies",
      "character_states": {
        "156": [157, 159],
        "203": [205],
        "206": [208, 209],
        "207": [210, 211],
        "212": [213, 214],
        "215": [217],
        "218": [220, 221, 222, 223],
        "224": [226],
        "250": [251, 252],
        "253": [254, 255],
        "256": [258],
        "153": [154, 155],
        "161": [162, 163],
        "164": [165, 166],
        "167": [169],
        "170": [171, 172],
        "173": [174, 175],
        "176": [177, 178],
        "179": [180, 181],
        "182": [184],
        "185": [187],
        "188": [190],
        "191": [192, 193, 194, 195, 196],
        "76": [77],
        "80": [81],
        "84": [91],
        "85": [95],
        "86": [97],
        "87": [108],
        "90": [89],
        "99": [101],
        "102": [103, 104],
        "115": [116, 117],
        "118": [120],
        "122": [124],
        "125": [128, 129, 131, 132],
        "134": [135, 136],
        "259": [260, 261],
        "137": [139],
        "140": [142],
        "143": [145],
        "146": [148],
        "149": [150, 152],
        "197": [199],
        "200": [201],
        "231": [232, 233],
        "235": [236, 237],
        "240": [242],
        "243": [245],
        "247": [249]
      },
      "common_name": "Highland Midge",
      "genus": "Culicoides",
      "species": "Multiple",
      "description": ["Midges can be found throughout the UK, highly prevalent in North Wales and Scotland", "Commonly found in very damp environments such as lakes, rivers, bogs and marshes", "Mainly active early morning and late evening and during late spring to late summer", "Individuals are normally very small and can be grey/black", "0.6-1.5mm in length", "Normally found in large swarms", "Six legs as with insect orders and two visible antennae", "Have transparent wings with visible dark markings", "Swarms can be small and inconspicuous or large and highly visible"],
      "bites_stings": ["Midges bite in swarms and are persistent and aggressive biters of people", "Bites can be painful and often people feel bites but cant see what is causing them", "Bites becoming secondarily infected is common so observe bites closely", "Bites can also bleed longer than other insect bites due to anti-clotting properties of saliva", "Localized symptoms from bites include itchiness, swelling and pain", "Commonly multiple bite swellings, due to swarms, that can be slow to heal", "As with many bites, allergic reaction can occur when bitten. If you suffer a major allergic reaction please dial 999 immediately. Symptoms of this can include breathing difficulties, dizziness and a swollen face/mouth.", "If you notice the bite has become infected please see a medical professional immediately. Symptoms of this include increased redness, pain, swelling and pus from the bite"],
      "category": "Aggressive biters normally in swarms",
      "warning": "Severe Allergic reactions can occur",
      "resources": ["Carpenter S, Mellor PS, Torr SJ. Control techniques for Culicoides biting midges and their application in the U.K. and northwestern Palaearctic. Med Vet Entomol. 2008 Sep;22(3):175-87", "Boorman, J., & Goddard, P. (1970). Observations on the biology of Culicoides impunctatus Goetgh. (Dipt., Ceratopogonidae) in southern England. Bulletin of Entomological Research, 60(2), 189-198.", "E.J.WITTMANN & M.BAYLIS (2000) Climate Change: Effects on Culicoides Transmitted Viruses and Implications for the UK.  Volume 160, Issue 2, Pages 107-117", "Wall R., Shearer D. (1997) Adult flies (Diptera). In: Veterinary Entomology. Springer, Dordrecht", "Goddard, J., & Zhou, L. (2007). Physician's Guide to Arthropods of Medical Importance, 5th Edition. Emerging Infectious Diseases, 13(9), 1442. doi:10.3201/eid1309.070706", "Hendry G, Godwin G. Biting midges in Scottish forestry: a costly irritant or a trivial nuisance? Scottish Forestry. 1988;42:113-119"]
    }, {
      "scientific_name": "Hybomitra",
      "images": [{
        "file": "hybomitra-1.jpg",
        "credit": "By \u00a9entomartIn case of publication or commercial use, Entomart wishes then to be warned (http://www.entomart.be/contact.html), but this without obligation. Thank you., Attribution, https://commons.wikimedia.org/w/index.php?curid=682306"
      }, {
        "file": "hybomitra-2.jpg",
        "credit": "By Janet Graham - Hybomitra montana, Fenn's Moss, North Wales, July 2010, CC BY 2.0, https://commons.wikimedia.org/w/index.php?curid=43126551"
      }],
      "group": "Flies",
      "character_states": {
        "156": [157],
        "203": [205],
        "206": [208, 209],
        "207": [210, 211],
        "212": [213, 214],
        "215": [217],
        "218": [220, 221, 222, 223],
        "224": [226],
        "250": [251, 252],
        "253": [254, 255],
        "256": [258],
        "153": [154],
        "161": [162, 163],
        "164": [165, 166],
        "167": [169],
        "170": [171, 172],
        "173": [174, 175],
        "176": [177, 178],
        "179": [180, 181],
        "182": [184],
        "185": [187],
        "188": [190],
        "191": [192, 193, 194, 195, 196],
        "76": [77],
        "80": [81],
        "84": [91],
        "85": [95],
        "86": [97],
        "87": [108],
        "90": [89],
        "99": [101],
        "102": [103, 104],
        "115": [116, 117],
        "118": [120],
        "122": [124],
        "125": [127, 128, 129],
        "134": [135, 136],
        "259": [260, 261],
        "137": [139],
        "140": [142],
        "143": [145],
        "146": [148],
        "149": [152],
        "197": [199],
        "200": [201],
        "231": [232, 233],
        "235": [237],
        "240": [242],
        "243": [245],
        "247": [249]
      },
      "common_name": "Horse Fly",
      "genus": "Multiple",
      "species": "Multiple",
      "description": ["Horse flies can be found throughout the UK", "Commonly found in very damp environments such as wet meadows and long vegetation bordering ponds, rivers and lakes.", "Mainly active early morning or late afternoon in late spring and summer months", "Individuals can be grey, black and brown with stripes and/or spots on the body.", "10-30mm in length", "Normally found individually", "Six legs as with insect orders and two visible antennae", "Have wings with dark markings", "Large brightly colored eyes"],
      "bites_stings": ["Horse flies have been observed to bite people and can be very aggressive in their nature", "Bites are normally described as very painful and deep", "Bites becoming secondarily infected is common so observe bites closely", "Bites can also bleed longer than other insect bites due to anti-clotting properties of saliva", "Localized symptoms from bites include itchiness, swelling and pain", "Commonly most bite swellings are few and will have disappeared within 7 days", "As with many bites, allergic reaction can occur when bitten. If you suffer a major allergic reaction please dial 999 immediately. Symptoms of this can include breathing difficulties, dizziness and a swollen face/mouth.", "If you notice the bite has become infected please see a medical professional immediately. Symptoms of this include increased redness, pain, swelling and pus from the bite"],
      "category": "Painful and aggressive biters",
      "warning": "Severe Allergic reactions can occur",
      "resources": ["Foil LD, 1989. Tabanids as vectors of disease agents. Parasitology Today, 5(3):88-96; 63 ref", "Foil LD; Hogsette JA, 1994. Biology and control of tabanids, stable flies and horn flies. Revue Scientifique et Technique - Office International des e\u0301pizooties, 13(4):1125-1158; 147 re", "McGarry JW, 1992. Abundance, Behaviour and Gonotrophic age structure of cattle-visiting Muscidae and Tabanidae in Cheshire. PhD thesis. Liverpool, UK: Liverpool University.", "Thompson RCK, 1986. The life history and ecology of the Common Clegg, Haematopota pluvialis in the west of Scotland. PhD thesis. Edinburgh, UK: University of Edinburgh.", "Chainey J.E. (1993) Horse-flies, deer-flies and clegs (Tabanidae). In: Lane R.P., Crosskey R.W. (eds) Medical Insects and Arachnids. Springer, Dordrecht", "Wall R., Shearer D. (1997) Adult flies (Diptera). In: Veterinary Entomology. Springer, Dordrecht", "Goddard, J., & Zhou, L. (2007). Physician's Guide to Arthropods of Medical Importance, 5th Edition. Emerging Infectious Diseases, 13(9), 1442. doi:10.3201/eid1309.070706"]
    }, {
      "scientific_name": "Simulium posticatum/equinum",
      "images": [{
        "file": "simulium-posticatum-equinum-1.jpg",
        "credit": "By AfroBrazilian - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=70701360"
      }, {
        "file": "simulium-posticatum-equinum-2.jpg",
        "credit": "By Alan R Walker - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=19034354"
      }],
      "group": "Flies",
      "character_states": {
        "156": [157],
        "203": [205],
        "206": [208, 209],
        "207": [210, 211],
        "212": [213, 214],
        "215": [217],
        "218": [220, 221, 222, 223],
        "224": [226],
        "250": [251, 252],
        "253": [254, 255],
        "256": [258],
        "153": [154],
        "161": [162, 163],
        "164": [165, 166],
        "167": [169],
        "170": [171, 172],
        "173": [174, 175],
        "176": [177, 178],
        "179": [180, 181],
        "182": [184],
        "185": [187],
        "188": [190],
        "191": [192, 193, 196],
        "76": [77],
        "80": [81],
        "84": [91],
        "85": [95],
        "86": [97],
        "87": [108],
        "90": [89],
        "99": [101],
        "102": [103, 104],
        "115": [116, 117],
        "118": [120],
        "122": [124],
        "125": [128, 129, 131, 132],
        "134": [135, 136],
        "259": [260, 261],
        "137": [139],
        "140": [142],
        "143": [145],
        "146": [148],
        "149": [152],
        "197": [199],
        "200": [201],
        "231": [232, 233],
        "235": [237],
        "240": [242],
        "243": [245],
        "247": [249]
      },
      "common_name": "Black/Blandford Fly",
      "genus": "Simulium",
      "species": "Multiple",
      "description": ["Black flies can be found throughout the UK", "Commonly found in very damp environments such as lakes, rivers, streams and ponds", "Mainly active early morning and late evening and during late spring and early summer", "Individuals can be black with small humpbacked bodies", "2-5mm in length", "Normally found in large swarms", "Six legs as with insect orders and two visible antennae", "Have very wide wings in contrast to short body", "Large compound eyes"],
      "bites_stings": ["Black flies often bite people in swarms and can be very aggressive in their nature", "Bites can be painless or painful", "Bites becoming secondarily infected is common so observe bites closely", "Bites can also bleed longer than other insect bites due to anti-clotting properties of saliva", "Localized symptoms from bites include itchiness, swelling and pain", "Commonly multiple bite swellings, due to swarms, that can be slow to heal", "As with many bites, allergic reaction can occur when bitten. If you suffer a major allergic reaction please dial 999 immediately. Symptoms of this can include breathing difficulties, dizziness and a swollen face/mouth.", "If you notice the bite has become infected please see a medical professional immediately. Symptoms of this include increased redness, pain, swelling and pus from the bite"],
      "category": "Aggressive biters normally in swarms",
      "warning": "Severe Allergic reactions can occur",
      "resources": ["Adler, Peter H.; Crosskey, Roger W. (2017). World blackflies (Diptera: Simuliidae): a comprehensive revision of the taxonomic and geographical inventory", "Crosskey, R.W. (1990) The National History of Blackflies. John wiley and sons, Chichester UK,  British Museum of Natural History, London.", "Crosskey, R. W. 1988. An annotated checklist of the world black flies (Diptera: Simuliidae). Pp. 425-520 in Kim and Merritt [1988].", "GUDGEL EF, GRAUER FH. (1954) Acute and chronic reactions to black fly bites; Simulium fly. AMA Arch Derm Syphilol.  Nov;70(5):609-15.", "Wall R., Shearer D. (1997) Adult flies (Diptera). In: Veterinary Entomology. Springer, Dordrecht", "Goddard, J., & Zhou, L. (2007). Physician's Guide to Arthropods of Medical Importance, 5th Edition. Emerging Infectious Diseases, 13(9), 1442. doi:10.3201/eid1309.070706"]
    }, {
      "scientific_name": "Stomoxys calcitrans",
      "images": [{
        "file": "stomoxys-calcitrans-2.jpg",
        "credit": "By Katja Schulz from Washington, D. C., USA - Stable Fly, CC BY 2.0,"
      }, {
        "file": "stomoxys-calcitrans-3.jpg",
        "credit": "By User:Fir0002 - Originally uploaded at 09:45, 12 July 2007 as Image:Musca domestica on aloe vera.jpg (was originally misidentified as a house fly, Musca domestica)., GFDL 1.2, https://commons.wikimedia.org/w/index.php?curid=3065345"
      }],
      "group": "Flies",
      "character_states": {
        "156": [157],
        "203": [205],
        "206": [208, 209],
        "207": [210, 211],
        "212": [213, 214],
        "215": [217],
        "218": [220, 221, 222, 223],
        "224": [226],
        "250": [251, 252],
        "253": [254, 255],
        "256": [258],
        "153": [154],
        "161": [162, 163],
        "164": [165, 166],
        "167": [169],
        "170": [171, 172],
        "173": [174, 175],
        "176": [177, 178],
        "179": [180, 181],
        "182": [184],
        "185": [187],
        "188": [190],
        "191": [192, 193, 194, 195, 196],
        "76": [77],
        "80": [81],
        "84": [91],
        "85": [95],
        "86": [97],
        "87": [108],
        "90": [89],
        "99": [101],
        "102": [103, 104],
        "115": [116, 117],
        "118": [120],
        "122": [124],
        "125": [126, 128, 129],
        "134": [135, 136],
        "259": [260, 261],
        "137": [139],
        "140": [142],
        "143": [145],
        "146": [148],
        "149": [152],
        "197": [199],
        "200": [201],
        "231": [232, 233],
        "235": [237],
        "240": [242],
        "243": [245],
        "247": [249]
      },
      "common_name": "Stable Fly",
      "genus": "Stomoxys",
      "species": "Calcitrans",
      "description": ["Stable flies can be found throughout the UK", "Often mistaken for and look very similar to common house flies except these bite", "Can be found around hay stacks, plant waste, cut grass and compost", "Individuals can be grey, black with dark stripes and/or spots on the body.", "5-6mm in length", "Normally found individually", "Six legs as with insect orders and two visible antennae", "Have transparent wings", "Rigid mouthpart pointing forwards and slightly lighter colour differentiates it from the common housefly"],
      "bites_stings": ["Stable flies have been observed to bite people and can be very aggressive in their nature", "Bites are normally described as very painful and deep", "Bites becoming secondarily infected is common so observe bites closely", "Bites can also bleed longer than other insect bites due to anti-clotting properties of saliva", "Localized symptoms from bites include itchiness, swelling and pain", "Commonly most bite swellings are few and will have disappeared within a few days", "As with many bites, allergic reaction can occur when bitten. If you suffer a major allergic reaction please dial 999 immediately. Symptoms of this can include breathing difficulties, dizziness and a swollen face/mouth.", "If you notice the bite has become infected please see a medical professional immediately. Symptoms of this include increased redness, pain, swelling and pus from the bite"],
      "category": "Painful and aggressive biters",
      "warning": "Severe Allergic reactions can occur",
      "resources": ["Foil LD, 1989. Tabanids as vectors of disease agents. Parasitology Today, 5(3):88-96; 63 ref", "Foil LD; Hogsette JA, 1994. Biology and control of tabanids, stable flies and horn flies. Revue Scientifique et Technique - Office International des e\u0301pizooties, 13(4):1125-1158; 147 re", "McGarry JW, 1992. Abundance, Behaviour and Gonotrophic age structure of cattle-visiting Muscidae and Tabanidae in Cheshire. PhD thesis. Liverpool, UK: Liverpool University.", "Thompson RCK, 1986. The life history and ecology of the Common Clegg, Haematopota pluvialis in the west of Scotland. PhD thesis. Edinburgh, UK: University of Edinburgh.", "Chainey J.E. (1993) Horse-flies, deer-flies and clegs (Tabanidae). In: Lane R.P., Crosskey R.W. (eds) Medical Insects and Arachnids. Springer, Dordrecht", "Wall R., Shearer D. (1997) Adult flies (Diptera). In: Veterinary Entomology. Springer, Dordrecht", "Goddard, J., & Zhou, L. (2007). Physician's Guide to Arthropods of Medical Importance, 5th Edition. Emerging Infectious Diseases, 13(9), 1442. doi:10.3201/eid1309.070706"]
    }, {
      "scientific_name": "Pediculus humanus capitis",
      "images": [{
        "file": "pediculus-humanus-capitis-1.jpg",
        "credit": "By \u05e2\u05e8\u05df \u05e4\u05d9\u05e0\u05e7\u05dc - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=5830732"
      }, {
        "file": "pediculus-humanus-capitis-2.jpg",
        "credit": "By Gilles San Martin from Namur, Belgium - Male human head louseUploaded by Jacopo Werther, CC BY-SA 2.0, https://commons.wikimedia.org/w/index.php?curid=24611116"
      }],
      "group": "Lice",
      "character_states": {
        "156": [159],
        "203": [205],
        "206": [208],
        "207": [211],
        "212": [214],
        "215": [216, 217],
        "218": [219],
        "224": [226],
        "250": [252],
        "253": [254, 255],
        "256": [258],
        "153": [154, 155],
        "161": [162, 163],
        "164": [166],
        "167": [169],
        "170": [172],
        "173": [175],
        "176": [178],
        "179": [181],
        "182": [184],
        "185": [187],
        "188": [189, 190],
        "191": [192, 193, 194, 195, 196],
        "76": [77],
        "80": [81],
        "84": [93],
        "99": [101],
        "102": [103],
        "115": [117],
        "118": [120],
        "122": [124],
        "125": [127, 129, 131, 132, 133],
        "134": [136],
        "259": [261],
        "137": [139],
        "140": [141, 142],
        "143": [145],
        "146": [148],
        "149": [150, 152],
        "197": [199],
        "200": [202],
        "231": [232],
        "235": [236, 238],
        "240": [242],
        "243": [245],
        "247": [249]
      },
      "common_name": "Head Lice",
      "genus": "Pediculus",
      "species": "Humanus",
      "description": ["Head lice are now extremely common in many areas worldwide. The US, as an example, treats around 12 million cases a year", "Lives on the scalp of infested individuals", "Commonly found in large groups", "Will normally die if removed from an individuals head for over 24 hours", "Individuals are very lightly colored brown/tan", "1-3mm in length", "Six legs as with insect orders", "Dorsoventrally flattened with elongate bodies", "Usually around 20% smaller than body lice", "Eggs are 1mm and are white or cream coloured oval objects stuck to the base of hair"],
      "bites_stings": ["Lice are regularly observed to bite people, especially found in school aged children", "Initial bites are described as painless", "Where bitten extremely itchy small bumps may appear", "Bites and eggs often found on areas of the scalp such as behind the ears or the top of the neck", "Localized symptoms from bites include itchiness, redness and discomfort", "Bites can become infected if scratched so avoiding this is very important", "Finding and treating the lice, removing their eggs, de-lousing clothing and other hair items like combs and treating all family members simultaneously are all extremely important", "Many high street products are now available for affected people including shampoo", "If, however, you have noticed you, your family or your child feel very unwell with lice bites or you are concerned please contact a medical professional"],
      "category": "Harmful",
      "warning": "Regularly bite people",
      "resources": ["BAD (2014) Head lice. British Association of Dermatologists www.bad.org.uk/", "Burgess, I. (2016)  Head lice: resistance and treatment options. Pharmaceutical Journal. 297(7893)", "Connolly, M. (2011) Current recommended treatments for head lice and scabies. Prescriber 22(1-2), 26-39.", "PHE (2013) Head lice (pediculosis). The characteristics, transmission and management of head lice (pediculosis). Public Health England.. www.gov.uk", "Thomas,D.R., McCarroll,L., Roberts,R., et al. (2006) Surveillance of insecticide resistance in head lice using biochemical and molecular methods. Archives of Diseases in Childhood. 91(9), 777-778", "Downs,A.M.R., Stafford,K.A., Hunt,L.P., et al. (2002) Widespread insecticide resistance in head lice to the over-the-counter pediculocides in England, and the emergence of carbaryl resistance. 146(1), 88-93.", "Dadabhoy I, Butts JF (2015) Parasitic Skin Infections for Primary Care Physicians. Primary Care 42(4), 661-675.", "Bonilla DL, Durden LA, Eremeeva ME, Dasch GA. The biology and taxonomy of head and body lice--implications for louse-borne disease prevention. PLoS Pathog. 2013;9(11):e1003724."]
    }, {
      "scientific_name": "Pediculus humanus corporis",
      "images": [{
        "file": "pediculus-humanus-corporis-2.jpg",
        "credit": "By Janice Harney Carr, Center for Disease Control - This media comes from the Centers for Disease Control and Prevention's Public Health Image Library (PHIL), with identification number #9217.Public Domain, https://commons.wikimedia.org/w/index.php?curid=9818830"
      }, {
        "file": "pediculus-humanus-corporis-3.jpg",
        "credit": "By Pediculosis - Deutsche Pediculosis Gesellschaft e.V., CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=2900386"
      }],
      "group": "Lice",
      "character_states": {
        "156": [159],
        "203": [205],
        "206": [208],
        "207": [211],
        "212": [214],
        "215": [216, 217],
        "218": [220, 221],
        "224": [226],
        "250": [252],
        "253": [254, 255],
        "256": [258],
        "153": [154, 155],
        "161": [162, 163],
        "164": [166],
        "167": [169],
        "170": [172],
        "173": [175],
        "176": [178],
        "179": [181],
        "182": [184],
        "185": [187],
        "188": [189, 190],
        "191": [192, 193, 194, 195, 196],
        "76": [77],
        "80": [81],
        "84": [93],
        "99": [101],
        "102": [103],
        "115": [117],
        "118": [120],
        "122": [124],
        "125": [127, 129, 131, 132, 133],
        "134": [136],
        "259": [261],
        "137": [139],
        "140": [141, 142],
        "143": [145],
        "146": [148],
        "149": [150, 152],
        "197": [199],
        "200": [202],
        "231": [232],
        "235": [236, 238],
        "240": [242],
        "243": [245],
        "247": [249]
      },
      "common_name": "Body Lice",
      "genus": "Pediculus",
      "species": "Humanus",
      "description": ["Body lice are now rare in more affluent communities of developed countries but extremely common in deprived, over-crowded, unsanitary or war torn areas worldwide", "Lives on clothing, especially in places where clothing touches the skin like underwear", "Commonly found in large groups", "Will normally die on clothing if its removed for several days", "Individuals are very lightly colored brown/tan", "2-4mm in length", "Six legs as with insect orders", "Dorsoventrally flattened with elongate bodies", "Usually around 20% larger than head lice", "Eggs are 1mm and are white or cream coloured oval objects stuck to clothing"],
      "bites_stings": ["Lice are regularly observed to bite people, especially found in the homeless population", "Initial bites are described as painless", "Where bitten extremely itchy small bumps may appear, normally in groups or lines", "Bites often found in areas of the body that have contact with clothing like the chest, groin, bottom, back and abdomen", "Localized symptoms from bites include itchiness, redness and discomfort", "Bites can become infected if scratched so avoiding this is very important", "Finding and treating both the person and the clothing/bedding will normally prevent ongoing bites and infestation.", "Topical and newer oral treatments now available for affected people.", "If you have noticed lice bites or the lice themselves, you feel unwell or you are concerned please contact a medical professional and pest management services"],
      "category": "Harmful",
      "warning": "Regularly bite people; spread disease mainly in returning travellers",
      "resources": ["BMJ Best Practice (2015) Pediculosis. British Medical Journal  bestpractice.bmj.com", "Sangare\u0301 AK, Doumbo OK, Raoult D. (2016) Management and Treatment of Human Lice. BioMed Research International2016(8962685).", "Bechah Y, Capo C, Mege JL, Raoult D. Epidemic typhus. Lancet Infect Dis. 2008 Jul;8(7):417-26", "Bonilla DL, Durden LA, Eremeeva ME, Dasch GA. The biology and taxonomy of head and body lice--implications for louse-borne disease prevention. PLoS Pathog. 2013;9(11):e1003724.", "Ko CJ, Elston DM. Pediculosis. J. Am. Acad. Dermatol. 2004 Jan;50(1):1-12; quiz 13-4.", "Burgess, I.F. Human lice and their management. Adv Parasitol. 1995; 36: 272-341", "Witkowski, J and Parish, L.C. What's new in the management of lice. Infect Med. 1997; 14: 287-296", "Witkowski, Joseph A et al. 2002 Pediculosis and resistance: the perennial problem Clinics in Dermatology, Volume 20, Issue 1, 87 - 92"]
    }, {
      "scientific_name": "Phthirus pubis",
      "images": [{
        "file": "phthirus-pubis-1.jpg",
        "credit": "Public Domain, https://commons.wikimedia.org/w/index.php?curid=1546363"
      }, {
        "file": "phthirus-pubis-2.jpg",
        "credit": "By Doc. RNDr. Josef Reischig, CSc. - Author's archive, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=31557499"
      }],
      "group": "Lice",
      "character_states": {
        "156": [159],
        "203": [205],
        "206": [208],
        "207": [211],
        "212": [214],
        "215": [216, 217],
        "218": [220, 222],
        "224": [226],
        "250": [252],
        "253": [254, 255],
        "256": [258],
        "153": [154, 155],
        "161": [162, 163],
        "164": [166],
        "167": [169],
        "170": [172],
        "173": [175],
        "176": [178],
        "179": [181],
        "182": [184],
        "185": [187],
        "188": [189, 190],
        "191": [192, 193, 194, 195, 196],
        "76": [77],
        "80": [81],
        "84": [93],
        "99": [101],
        "102": [103],
        "115": [116],
        "118": [120],
        "122": [124],
        "125": [127, 129, 131, 132, 133],
        "134": [136],
        "259": [261],
        "137": [139],
        "140": [141, 142],
        "143": [145],
        "146": [148],
        "149": [150, 152],
        "197": [199],
        "200": [202],
        "231": [232],
        "235": [236, 238],
        "240": [242],
        "243": [245],
        "247": [249]
      },
      "common_name": "Pubic Lice",
      "genus": "Phthirus",
      "species": "Pubis",
      "description": ["Pubic lice are now extremely common in many areas worldwide", "Lives in the pubic or peri-anal areas of infested individuals, occasionally found in eye-lashes or other course hair such as chest hair", "Commonly found in large groups", "Will normally die if removed from an individual for over 20 hours", "Individuals are very dark grey to brown colour", "1-2mm in length", "Six legs as with insect orders", "Much more rounded/oval and flattened bodies compared to head lice", "Eggs are dark brown coloured oval objects stuck to the base of hair"],
      "bites_stings": ["Lice are regularly observed to bite people, almost exclusively in sexually active individuals", "Initial bites are described as painless", "Where bitten extremely itchy, round, grey/blue-ish spots appear", "Bites and eggs often found exclusively on hairs in the groin region", "Localized symptoms from bites include itchiness, characteristic spots and discomfort", "Bites can become infected if scratched so avoiding this is very important", "Finding and treating the lice, removing their eggs, examining family members if they sleep in the same bed and examining sexual contacts are all extremely important", "If you have noticed pubic lice or their bites or feel very unwell with lice bites or you are concerned please contact a medical professional and/or visit sexual health services"],
      "category": "Harmful",
      "warning": "Regularly bite people, usually transmitted through sexual contact",
      "resources": ["BASHH (2007) United Kingdom national guideline on the management of Phthirus pubis infestation (2007). British Association of Sexual Health and HIV, Clinical Effectiveness Group. . www.bashh.org", "Centres for Disease Control and Prevention (2015) 2015 Sexually transmitted diseases treatment guidelines. Ectoparasitic infections: pediculosis pubis. CDC. www.cdc.gov/std/tg2015/ectoparasitic.htm", "Dadabhoy I, Butts JF (2015) Parasitic Skin Infections for Primary Care Physicians. Primary Care 42(4), 661-675.", "Salavastru CM, Chosidow O, Janier M, Tiplica GS (2017) European guideline for the management of pediculosis pubis. J Eur Acad Dermatol Venereol. 31(9), 1425-1428."]
    }, {
      "scientific_name": "Glomeris marginata",
      "images": [{
        "file": "glomeris-marginata-1.jpg",
        "credit": "By Botaurus stellaris - Own work, Public Domain, https://commons.wikimedia.org/w/index.php?curid=3986442"
      }, {
        "file": "glomeris-marginata-2.jpg",
        "credit": "By Botaurus stellaris - Own work, Public Domain, https://commons.wikimedia.org/w/index.php?curid=3986435"
      }],
      "group": "Millipedes",
      "character_states": {
        "156": [159],
        "203": [205],
        "206": [209],
        "207": [210],
        "212": [214],
        "215": [217],
        "218": [221, 222, 223],
        "224": [226],
        "250": [252],
        "253": [255],
        "256": [257, 258],
        "153": [154],
        "161": [162],
        "164": [165],
        "167": [169],
        "170": [171, 172],
        "173": [174, 175],
        "176": [177, 178],
        "179": [181],
        "182": [183, 184],
        "185": [187],
        "188": [190],
        "191": [192, 193, 194, 195, 196],
        "76": [79],
        "80": [81],
        "84": [93],
        "99": [101],
        "102": [103],
        "115": [117],
        "118": [121],
        "122": [124],
        "125": [128, 131, 132],
        "134": [135],
        "259": [261],
        "137": [138],
        "140": [142],
        "143": [145],
        "146": [148],
        "149": [152],
        "197": [199],
        "200": [202],
        "231": [232, 234],
        "235": [236, 238],
        "240": [242],
        "243": [245],
        "247": [249]
      },
      "common_name": "Pill Millipede",
      "genus": "Glomeris",
      "species": "Marginata",
      "description": ["Pill millipedes can be found in many parts of the UK, mainly in southern areas", "Commonly found in hedgerows, leaf litter/dead plant matter and under old walls/rock", "Often seen in gardens and mainly active at night", "Individuals can be black/brown with white-rimmed bands on each body segment.", "20mm in length", "Normally found individually", "18 pairs of legs, two pairs per segment, which can help differentiate it from wood lice", "No wings present", "Can roll into a tight ball when feel threatened", "Can often look smooth and shiny"],
      "bites_stings": ["Pill millipedes do not bite or sting people but have been observed to discharge Quinone containing defensive body fluid when they feel threatened.", "Quinones can irritate and stain soft body parts like eyes and skin", "Other than the fluid and irritancy from it, Pill millipedes are generally harmless", "Localized symptoms from fluid have included itchiness, staining and painful eyes", "Most skin lesions from the fluid are small and will disappear within a few days.", "If fluid gets into the eye rinse copiously with water, or eye irrigating solution if available, for at least ten minutes. If eye symptoms or skin staining are severe or you are concerned please visit an Ophthalmologist or medical professional"],
      "category": "Generally harmless",
      "warning": "Fluid released by millipede can discolour or irritate skin and eyes",
      "resources": ["Radford AJ. Millipede burns in man. Trop Geogr Med. 1975 Sep;27(3):279-87. PubMed PMID: 1103388.", "O'Donel Alexander J. (1984) Centipede Bites and Millipede Burns. In: Arthropods and Human Skin. Springer, London", "James, William D.; Berger, Timothy G.; et al. (2006). Andrews' Diseases of the Skin: clinical Dermatology. Saunders Elsevier.", "Eisner, Thomas (2003). For Love of Insects. Cambridge, Massachusetts: Belknap Press. p. 464", "Hendrickson RG. Millipede exposure. Clin Toxicol (Phila). 2005;43:211-212.", "Verma AK, Bourke B. Millipede burn masquerading as trash foot in a paediatric patient [published online October 29, 2013]. ANZ J Surg. 2014;84:388-390.", "Lima CA, Cardoso JL, Magela A, et al. Exogenous pigmentation in toes feigning ischemia of the extremities: a diagnostic challenge brought by arthropods of the Diplopoda class (\u201cmillipedes\u201d). An Bras Dermatol. 2010;85:391-392.", "Kuwahara Y, Omura H, Tanabe T. 2-Nitroethenylbenzenes as naturalproducts in millipede defense secretions. Naturwissenschaften. 2002;89:308-310.", "Shear, W. (2015). The chemical defenses of millipedes (diplopoda): Biochemistry, physiology and ecology.", "James E. Carrell (1984). Defensive secretion of the pill millipede Glomeris marginata\". Journal of Chemical Ecology. 10 (1): 41-51.", "Blower, J.G. 1974. The distribution of British millipedes as known up to 1970.Symp. Zool. Soc. London 32:603-609"]
    }, {
      "scientific_name": "Tachypodoiulus niger",
      "images": [{
        "file": "tachypodoiulus-niger-1.jpg",
        "credit": "By Stemonitis - Own work, CC BY 2.5,"
      }, {
        "file": "tachypodoiulus-niger-2.jpg",
        "credit": "By Stemonitis - Own work, CC BY 2.5, https://commons.wikimedia.org/w/index.php?curid=2321217"
      }],
      "group": "Millipedes",
      "character_states": {
        "156": [159],
        "203": [205],
        "206": [209],
        "207": [210],
        "212": [214],
        "215": [217],
        "218": [221, 222, 223],
        "224": [226],
        "250": [252],
        "253": [255],
        "256": [257, 258],
        "153": [154],
        "161": [162],
        "164": [165],
        "167": [169],
        "170": [171, 172],
        "173": [174, 175],
        "176": [177, 178],
        "179": [181],
        "182": [183, 184],
        "185": [187],
        "188": [190],
        "191": [192, 193, 194, 195, 196],
        "76": [79],
        "80": [81],
        "84": [93],
        "99": [101],
        "102": [103],
        "115": [117],
        "118": [121],
        "122": [124],
        "125": [128, 131, 132],
        "134": [136],
        "259": [261],
        "137": [138],
        "140": [142],
        "143": [145],
        "146": [148],
        "149": [152],
        "197": [199],
        "200": [202],
        "231": [232, 234],
        "235": [236, 238],
        "240": [242],
        "243": [245],
        "247": [249]
      },
      "common_name": "White Legged Snake Millipede",
      "genus": "Tachypodoiulus",
      "species": "Niger",
      "description": ["White-legged snake millipedes, (WLS), can be found in many parts of the UK", "Commonly found in moss, leaf litter/dead plant matter and under tree bark", "Often seen in gardens and mainly active at night", "Individuals can be black with distinct contrasting white legs", "Up to 6cm in length", "Normally found individually", "Around 100 legs, two pairs per segment", "No wings present", "Can roll into a tight ball when feel threatened", "Can often look smooth and shiny"],
      "bites_stings": ["WLS millipedes do not bite or sting people but there have been some reports of these millipedes swarming into houses", "Although swarming can be a nuisance to residents they should not harm people", "Other than the swarming and irritancy from it, WLS millipedes are harmless", "Blacking out windows at night to prevent attracting the swarms have been suggested and used in other countries to some success. If you are affected by millipede swarms or are concerned please contact pest control services"],
      "category": "Harmless",
      "warning": "Some reports of swarming into houses",
      "resources": ["Radford AJ. Millipede burns in man. Trop Geogr Med. 1975 Sep;27(3):279-87. PubMed PMID: 1103388.", "O'Donel Alexander J. (1984) Centipede Bites and Millipede Burns. In: Arthropods and Human Skin. Springer, London", "James, William D.; Berger, Timothy G.; et al. (2006). Andrews' Diseases of the Skin: clinical Dermatology. Saunders Elsevier.", "Eisner, Thomas (2003). For Love of Insects. Cambridge, Massachusetts: Belknap Press. p. 464", "Hendrickson RG. Millipede exposure. Clin Toxicol (Phila). 2005;43:211-212.", "Verma AK, Bourke B. Millipede burn masquerading as trash foot in a paediatric patient [published online October 29, 2013]. ANZ J Surg. 2014;84:388-390.", "Lima CA, Cardoso JL, Magela A, et al. Exogenous pigmentation in toes feigning ischemia of the extremities: a diagnostic challenge brought by arthropods of the Diplopoda class (\u201cmillipedes\u201d). An Bras Dermatol. 2010;85:391-392.", "Kuwahara Y, Omura H, Tanabe T. 2-Nitroethenylbenzenes as naturalproducts in millipede defense secretions. Naturwissenschaften. 2002;89:308-310.", "Shear, W. (2015). The chemical defenses of millipedes (diplopoda): Biochemistry, physiology and ecology.", "Blower, J.G. 1974. The distribution of British millipedes as known up to 1970.Symp. Zool. Soc. London 32:603-609"]
    }, {
      "scientific_name": "Neotrombicula autumnalis",
      "images": [{
        "file": "neotrombicula-autumnalis-1.jpg",
        "credit": "By Alan R Walker - Own work, CC BY-SA 4.0,"
      }, {
        "file": "neotrombicula-autumnalis-2.jpg",
        "credit": "By TimVickers - Own work, Public Domain, https://commons.wikimedia.org/w/index.php?curid=4369729"
      }],
      "group": "Mites",
      "character_states": {
        "156": [159],
        "203": [205],
        "206": [208],
        "207": [211],
        "212": [213, 214],
        "215": [216, 217],
        "218": [220, 221, 222, 223],
        "224": [226],
        "250": [251, 252],
        "253": [254, 255],
        "256": [258],
        "153": [154],
        "161": [162, 163],
        "164": [165, 166],
        "167": [168],
        "170": [171, 172],
        "173": [174, 175],
        "176": [177, 178],
        "179": [181],
        "182": [184],
        "185": [186, 187],
        "188": [190],
        "191": [192, 193, 194, 195, 196],
        "76": [78],
        "80": [82],
        "84": [93],
        "99": [101],
        "102": [103],
        "115": [116],
        "118": [119],
        "122": [124],
        "125": [126, 129, 132, 133],
        "134": [135, 136],
        "259": [261],
        "137": [139],
        "140": [141, 142],
        "143": [145],
        "146": [148],
        "149": [150, 152],
        "197": [198],
        "200": [202],
        "231": [232, 234],
        "235": [238],
        "240": [242],
        "243": [245],
        "247": [249]
      },
      "common_name": "Harvest Mite",
      "genus": "Neotrombicula",
      "species": "Autumnalis",
      "description": ["Harvest mites are common and occur in many European countries", "Principally found in grassy and wooded areas like forest edges, orchards and fields", "Usually identified in groups", "It is not the brightly coloured visible adults that bite people however, but their tiny larvae", "Adults look velvety and bright red, larvae are smaller and can be orange/red", "Adults around 1mm in length with larvae around 0.2mm long", "Six legs in young stages with adults having eight legs", "Very round, oval shaped bodies, often described as crab-like", "Larvae will attach to soft skinned areas like ankles or the waistline and fall off after a few days"],
      "bites_stings": ["Mites are regularly observed to bite people, especially those who work/spend time outside", "Initial bites are described as painless", "Where bitten, extremely itchy small bumps may appear, normally in groups or lines", "This itchiness can persist for a couple of weeks, even after the mites are gone", "Bites can often be found on the ankles, feet, waistline and groin regions", "Localized symptoms from bites include itchiness, redness, skin inflammation and discomfort", "Bites can become infected if scratched so avoiding this is very important", "After being bitten in outdoor areas, hot baths and showers have been shown to remove attached and unattached mites", "Over the counter anti-itching bite solutions can often help with the symptoms", "If the bites become infected, you feel unwell or you are concerned please contact a medical professional for further advice"],
      "category": "Harmful",
      "warning": "Regularly bite people; spread disease mainly in returning travellers",
      "resources": ["Benjamin J. Parcell, Graeme Sharpe, Brian Jones and Claire L. Alexander - Parcell, B. J., Sharpe, G., Jones, B. & Alexander, C. L. 2013: Conjunctivitis induced by a red bodied mite, Neotrombicula autumnalis. Parasite, 20, 25.", "DALE W. JENKINS, TROMBICULID MITES AFFECTING MAN: II. CONTROL OF LARVAL BEHAVIOR FOR DISEASE TRANSMISSION STUDIES, American Journal of Epidemiology, Volume 48, Issue 1, July 1948, Pages 36-44,", "Baumann T. 2001. New treatment for harvest mite infestation. Archives of Internal Medicine, 161, 769.", "Jones B.M. 1950. The penetration of the host tissue by the harvest mite, Trombicula autumnalis Shaw. Parasitology 40: 247-260.", "Diaz JH. 2010. Mites, including Chiggers, in Principles and Practice of Infectious Diseases. Mandell GL, Bennett JE, Dolin R, Editors. Churchill Livingstone: United States, p. 3643-3647", "Scho\u0308ler A, Maier WA, Kampen H. 2006. Multiple environmental factor analysis in habitats of the harvest mite Neotrombicula autumnalis (Acari: Trombiculidae) suggests extraordinarily high euryoecious biology. Experimental and Applied Acarology, 39, 41-62", "Yates VM. 1991. Harvest mites-a present from the Lake District. Clinical and Experimental Dermatology, 16, 277-278"]
    }, {
      "scientific_name": "Sarcoptes scabiei",
      "images": [{
        "file": "sarcoptes-scabiei-1.jpg",
        "credit": "By Mikael Ha\u0308ggstro\u0308m - CDC web site > DPDx - Laboratory Identification of Parasites of Public Health Concern > Scabies [1], Public Domain, https://commons.wikimedia.org/w/index.php?curid=14512661"
      }, {
        "file": "sarcoptes-scabiei-2.jpg",
        "credit": "By No machine-readable author provided. Cixia assumed (based on copyright claims). - No machine-readable source provided. Own work assumed (based on copyright claims)., Public Domain, https://commons.wikimedia.org/w/index.php?curid=1891004"
      }, {
        "file": "sarcoptes-scabiei-3.jpg",
        "credit": "By [[User:Alan R Walker (talk) 09:25, 28 January 2014 (UTC)]] - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=27934682"
      }],
      "group": "Mites",
      "character_states": {
        "156": [159],
        "203": [205],
        "206": [208],
        "207": [211],
        "212": [213, 214],
        "215": [216, 217],
        "218": [220, 221, 222, 223],
        "224": [226],
        "250": [252],
        "253": [254, 255],
        "256": [258],
        "153": [154, 155],
        "161": [162, 163],
        "164": [165, 166],
        "167": [168],
        "170": [172],
        "173": [175],
        "176": [178],
        "179": [181],
        "182": [184],
        "185": [187],
        "188": [189, 190],
        "191": [192, 193, 194, 195, 196],
        "76": [78],
        "80": [82],
        "84": [93],
        "99": [101],
        "102": [103],
        "115": [116],
        "118": [119],
        "122": [124],
        "125": [129, 132],
        "134": [136],
        "259": [261],
        "137": [139],
        "140": [141, 142],
        "143": [145],
        "146": [148],
        "149": [150, 152],
        "197": [198],
        "200": [202],
        "231": [232, 234],
        "235": [238],
        "240": [242],
        "243": [245],
        "247": [249]
      },
      "common_name": "Scabies",
      "genus": "Sarcoptes",
      "species": "Scabei",
      "description": ["Scabies are extremely common, occurring worldwide in all climates and areas", "Scabies burrow under the skin and these burrows are commonly found on the elbows, wrists and hands especially in the skin that lies between fingers", "The mites pass from person to person via close contact, defined as around ten minutes", "Usually identified by a characteristic rash or by the burrows in skin", "Individual mites are tiny, around 0.2 to 0.4mm in length", "Have oval, ventrally flattened and convex domed bodies", "Eight legs present", "No wings", "Females will infest new hosts and burrow into the skin where the eggs are laid. Hatched mites will feed on human skin and hair follicle secretions"],
      "bites_stings": ["Mites are regularly observed to bite people, especially those in prolonged close proximity for example people in nursing homes, childcare facilities and prisons", "Initial bites are described as painless", "Around one month after first being bitten a severe itching sensation occurs over much of the body and large areas of inflamed rash can appear all over the body and not necessarily where the burrows are located.", "This itchiness is classically worse at night and made worse by warm temperatures", "Burrows can often be found on fingers, wrists, elbows, buttock creases and armpits", "Localized symptoms from burrows include itchiness, red rash and skin inflammation", "Skin can become infected if scratched so avoiding this is very important", "If you think you are suffering from scabies you should see a medical professional and/or skin doctor immediately as many skin diseases can mimic the infestation", "If the skin becomes infected, you feel unwell or you are concerned please contact a medical professional for further advice"],
      "category": "Harmful",
      "warning": "Regularly bite people causing skin diseases and inflammation",
      "resources": ["Thomas J, Peterson GM, Walton SF, Carson CF, Naunton M, Baby KE. Scabies: an ancient global disease with a need for new therapies. BMC Infect Dis. 2015;15:250", "Veterinary Dermatology 17, 223-235", "UKTIS (2013) Treatment of scabies in pregnancy. UK Teratology Informatuon Service (UKTIS) www.medicinesinpregnancy.org/bumps/monographs/TREATMENT-OF-SCABIES-IN-PREGNANCY/", "British Association for Sexual Health and HIV (2016) UK National Guideline on the Management of Scabies. BASHH. www.bashhguidelines.org", "BMJ Best Practice (2017) Scabies. BMJ Publishing Group bestpractice.bmj.com", "Lassa S., Campbell M.J. and and Bennett, C.E. (2011) Epidemiology of scabies prevalence in the U.K. from general practice records. Br J Dermatol 164(6), 1329-1334."]
    }, {
      "scientific_name": "Aedes albopictus",
      "images": [{
        "file": "aedes-albopictus-1.jpg",
        "credit": "By James Gathany, CDC - This media comes from the Centers for Disease Control and Prevention's Public Health Image Library (PHIL), with identification number #2165.Note: Not all PHIL images are public domain; be sure to check copyright status and credit authors and content providers., Public Domain, https://commons.wikimedia.org/w/index.php?curid=3670049"
      }, {
        "file": "aedes-albopictus-2.jpg",
        "credit": "By James Gathany, CDC - This media comes from the Centers for Disease Control and Prevention's Public Health Image Library (PHIL), with identification number #1863.Note: Not all PHIL images are public domain; be sure to check copyright status and credit authors and content providers., Public Domain, https://commons.wikimedia.org/w/index.php?curid=329364"
      }],
      "group": "Mosquitoes",
      "character_states": {
        "156": [159],
        "203": [205],
        "206": [208],
        "207": [211],
        "212": [213, 214],
        "215": [216, 217],
        "218": [219, 220, 221, 222, 223],
        "224": [226],
        "250": [251, 252],
        "253": [254, 255],
        "256": [258],
        "153": [154, 155],
        "161": [162, 163],
        "164": [165, 166],
        "167": [169],
        "170": [171, 172],
        "173": [174, 175],
        "176": [177, 178],
        "179": [180, 181],
        "182": [183, 184],
        "185": [187],
        "188": [189, 190],
        "191": [192, 193, 196],
        "76": [77],
        "80": [81],
        "84": [91],
        "85": [95],
        "86": [97],
        "87": [108],
        "90": [89],
        "99": [101],
        "102": [104],
        "115": [117],
        "118": [120],
        "122": [124],
        "125": [128, 129, 132],
        "134": [135],
        "259": [260, 261],
        "137": [139],
        "140": [142],
        "143": [145],
        "146": [148],
        "149": [150, 152],
        "197": [199],
        "200": [201],
        "231": [233],
        "235": [236, 237],
        "240": [242],
        "243": [245],
        "247": [248, 249]
      },
      "common_name": "Asian Tiger",
      "genus": "Aedes",
      "description": ["Aedes mosquito including the Asian Tiger Mosquito (ASM) have been found in southern England, mainly in flooded habitats like temporary pools/flooded rivers, but also in wet artificial containers like flowerpots and jars and have a preference for piles of car tyres", "Aggressive day time biters that land and bite quickly", "Can be found individually or in large groups", "Individuals mostly black with distinct white/silver markings", "2-8mm in length", "Six very distinctive fragile long legs", "Long slender body frame with visible antennae", "Two Translucent wings with wing veins", "Long straw looking mouthpart used for feeding"],
      "bites_stings": ["Mosquito are regularly observed to bite people worldwide", "Initial bites are described as painless", "Where bitten extremely itchy small bumps may appear, these should disappear within 7 days", "Bites can also sometimes develop into blisters", "Bites often found on exposed areas of skin like arms/legs but can occur all over the body", "Localized symptoms from bites include itchiness, redness and discomfort", "Bites can become infected if scratched so avoiding this is very important", "There are many high street products available to prevent and relieve symptoms of bites", "Please see medical services for pre-travel mosquito advice if travelling abroad", "If bites become infected, you feel unwell after being bitten or you are concerned please contact a medical professional and pest management services"],
      "category": "Harmful",
      "warning": "Regularly bite people; spreads disease mainly in returning travellers",
      "resources": ["Metelmann S et al (2019) The UK's suitability for Aedes albopictus in current and future climates 16J. R. Soc. Interface", "VA, England ME, Stoner J, et al. (2017) How often do mosquitoes bite humans in southern England? A standardised summer trial at four sites reveals spatial, temporal and site-related variation in biting rates. Parasit Vectors.;10(1):420.", "Medlock JM, Hansford KM, Anderson M, Mayho R, Snow KR. Mosquito nuisance and control in the UK - a questionnaire-based survey of local authorities. Eur Mosq Bull. 2012;30:15-29", "Malcolm CA. Public health issues posed by mosquitoes. An Independent Report. 2009;", "Medlock JM, Snow KR, Leach SA. Possible ecology and epidemiology of medically important mosquito-borne arboviruses in great Britain. Epidemiol Infect. 2007;135:466-482", "Service MW Feeding behaviour and host preferences of British mosquitoes. Bull Entomol Res. 1971;60:653-661.", "Medlock JM, Snow KR, Leach S. Potential transmission of West Nile virus in the British Isles: an ecological review of candidate mosquito bridge vectors. Medical and Veterinary Entomology. 2005;19:2-21"],
      "species": "Albopictus"
    }, {
      "scientific_name": "Anopheles atroparvus",
      "images": [{
        "file": "anopheles-atroparvus-1.jpg",
        "credit": "By AfroBrazilian - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=76601862"
      }, {
        "file": "anopheles-atroparvus-2.jpg",
        "credit": "By AfroBrazilian - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=76601867"
      }],
      "group": "Mosquitoes",
      "character_states": {
        "156": [159],
        "203": [205],
        "206": [208],
        "207": [211],
        "212": [213, 214],
        "215": [216, 217],
        "218": [219, 220, 221, 222, 223],
        "224": [226],
        "250": [251, 252],
        "253": [254, 255],
        "256": [258],
        "153": [154, 155],
        "161": [162, 163],
        "164": [165, 166],
        "167": [169],
        "170": [171, 172],
        "173": [174, 175],
        "176": [177, 178],
        "179": [180, 181],
        "182": [183, 184],
        "185": [187],
        "188": [189, 190],
        "191": [192, 193, 196],
        "76": [77],
        "80": [81],
        "84": [91],
        "85": [95],
        "86": [97],
        "87": [108],
        "90": [89],
        "99": [101],
        "102": [104],
        "115": [117],
        "118": [120],
        "122": [124],
        "125": [128, 129],
        "134": [135, 136],
        "259": [260, 261],
        "137": [139],
        "140": [142],
        "143": [145],
        "146": [148],
        "149": [150, 152],
        "197": [199],
        "200": [201],
        "231": [233],
        "235": [236, 237],
        "240": [242],
        "243": [245],
        "247": [248, 249]
      },
      "common_name": "Anopheles Atroparvus",
      "genus": "Anopheles",
      "description": ["Anopheles mosquito including atroparvus have been found in southern UK, mainly in brackish water like flooded salt marshes and coastal pools but also fresh water areas like temporary river pools, wooded pools and on vegetation near water systems", "Aggressive night and day time biters", "Individuals mostly brown/golden", "Six very distinctive fragile long legs", "Long slender body frame with visible antennae", "Two Translucent wings with wing veins", "Long straw looking mouthpart used for feeding"],
      "bites_stings": ["Mosquito are regularly observed to bite people worldwide", "Initial bites are described as painless", "Where bitten extremely itchy small bumps may appear, these should disappear within a few days", "Bites can also sometimes develop into blisters", "Bites often found on exposed areas of skin like arms/legs but can occur all over the body", "Localized symptoms from bites include itchiness, redness and discomfort", "Bites can become infected if scratched so avoiding this is very important", "There are many high street products available to prevent and relieve symptoms of bites", "Please see medical services for pre-travel mosquito advice if travelling abroad", "If bites become infected, you feel unwell after being bitten or you are concerned please contact a medical professional and pest management services"],
      "category": "Harmful",
      "warning": "Regularly bite people; spreads disease mainly in returning travellers",
      "resources": ["Ramsdale C, Snow K. Distribution of the genus Anopheles in Europe. Eu Mosq Bull. 2000;7:1-26.", "Danabalan R, Monaghan MT, Ponsonby DJ, Linton YM. Occurrence and host preferences of Anopheles maculipennis group mosquitoes in England and Wales. Med Vet Entomol. 2013 Jul 15.", "VA, England ME, Stoner J, et al. (2017) How often do mosquitoes bite humans in southern England? A standardised summer trial at four sites reveals spatial, temporal and site-related variation in biting rates. Parasit Vectors.;10(1):420.", "Medlock JM, Hansford KM, Anderson M, Mayho R, Snow KR. Mosquito nuisance and control in the UK - a questionnaire-based survey of local authorities. Eur Mosq Bull. 2012;30:15-29", "Malcolm CA. Public health issues posed by mosquitoes. An Independent Report. 2009;", "Medlock JM, Snow KR, Leach SA. Possible ecology and epidemiology of medically important mosquito-borne arboviruses in great Britain. Epidemiol Infect. 2007;135:466-482", "Service MW Feeding behaviour and host preferences of British mosquitoes. Bull Entomol Res. 1971;60:653-661.", "Medlock JM, Snow KR, Leach S. Potential transmission of West Nile virus in the British Isles: an ecological review of candidate mosquito bridge vectors. Medical and Veterinary Entomology. 2005;19:2-21"],
      "species": "Atroparvus"
    }, {
      "scientific_name": "Culex molestus",
      "images": [{
        "file": "culex-molestus-1.jpg",
        "credit": "By Seney Natural History Association - mosquito bitesUploaded by AlbertHerring, CC BY-SA 2.0, https://commons.wikimedia.org/w/index.php?curid=29577798"
      }, {
        "file": "culex-molestus-2.jpg",
        "credit": "By US Centers for Disease Control - City of Jacksonville, FL, obtained from US Centers for Disease Control public database, Public Domain, https://commons.wikimedia.org/w/index.php?curid=64223917"
      }],
      "group": "Mosquitoes",
      "character_states": {
        "156": [159],
        "203": [205],
        "206": [208],
        "207": [211],
        "212": [213, 214],
        "215": [216, 217],
        "218": [219, 220, 221, 222, 223],
        "224": [226],
        "250": [251, 252],
        "253": [254, 255],
        "256": [258],
        "153": [154, 155],
        "161": [162, 163],
        "164": [165, 166],
        "167": [169],
        "170": [171, 172],
        "173": [174, 175],
        "176": [177, 178],
        "179": [180, 181],
        "182": [183, 184],
        "185": [187],
        "188": [189, 190],
        "191": [192, 193, 196],
        "76": [77],
        "80": [81],
        "84": [91],
        "85": [95],
        "86": [97],
        "87": [108],
        "90": [89],
        "99": [101],
        "102": [104],
        "115": [117],
        "118": [120],
        "122": [124],
        "125": [127, 128, 129, 131],
        "134": [136],
        "259": [260, 261],
        "137": [139],
        "140": [142],
        "143": [145],
        "146": [148],
        "149": [150, 152],
        "197": [199],
        "200": [201],
        "231": [233],
        "235": [236, 237],
        "240": [242],
        "243": [245],
        "247": [248, 249]
      },
      "common_name": "London Underground Mossy",
      "genus": "Culex",
      "description": ["Culex mosquito including the House and London Underground Mosquito (LUM) are very common, found in many over ground and underground ecosystems e.g. tube networks, basements, sewers, caves and other water systems", "Feeds on animals within these systems including birds, humans, rats, mice and foxes", "Can be found individually or in large groups", "Some taxonomic debate as to whether LUM is a pipiens mosquito or a new subspecies", "Individuals mostly greyish brown or brown in colour", "6mm in length", "Six very distinctive fragile long legs", "Long slender body frame with visible antennae", "Two Translucent wings with wing veins", "Long straw looking mouthpart used for feeding"],
      "bites_stings": ["Mosquito are regularly observed to bite people worldwide", "Initial bites are described as painless", "Where bitten extremely itchy small bumps may appear, these should disappear within 7 days", "Bites can also sometimes develop into blisters", "Bites often found on exposed areas of skin like arms/legs but can occur all over the body", "Localized symptoms from bites include itchiness, redness and discomfort", "Bites can become infected if scratched so avoiding this is very important", "There are many high street products available to prevent and relieve symptoms of bites", "Please see medical services for pre-travel mosquito advice if travelling abroad", "If bites become infected, you feel unwell after being bitten or you are concerned please contact a medical professional and pest management services"],
      "category": "Harmful",
      "warning": "Regularly bite people; spreads disease mainly in returning travellers",
      "resources": ["Kassim NFA, Webb CE and Russell RC (2013) Australian distribution, genetic status and seasonal abundance of the exotic mosquito Culex molestus Forskal (Diptera: Culicidae). Australian Journal of Entomology 52: 185-198", "Kent, R. J., Harrington, L. C., & Norris, D. E. (2007). Genetic differences between Culex pipiens f. molestus and Culex pipiens pipiens (Diptera: Culicidae) in New York. Journal of medical entomology, 44(1), 50-59. doi:10.1603/0022-2585(2007)44[50:gdbcpf]2.0.co;2", "Brugman VA, England ME, Stoner J, et al. (2017) How often do mosquitoes bite humans in southern England? A standardised summer trial at four sites reveals spatial, temporal and site-related variation in biting rates. Parasit Vectors.;10(1):420.", "Medlock JM, Hansford KM, Anderson M, Mayho R, Snow KR. Mosquito nuisance and control in the UK - a questionnaire-based survey of local authorities. Eur Mosq Bull. 2012;30:15-29", "Malcolm CA. Public health issues posed by mosquitoes. An Independent Report. 2009;", "Medlock JM, Snow KR, Leach SA. Possible ecology and epidemiology of medically important mosquito-borne arboviruses in great Britain. Epidemiol Infect. 2007;135:466-482", "Service MW Feeding behaviour and host preferences of British mosquitoes. Bull Entomol Res. 1971;60:653-661.", "Medlock JM, Snow KR, Leach S. Potential transmission of West Nile virus in the British Isles: an ecological review of candidate mosquito bridge vectors. Medical and Veterinary Entomology. 2005;19:2-21"],
      "species": "Molestus"
    }, {
      "scientific_name": "Ochlerotatus detritus",
      "images": [{
        "file": "ochlerotatus-detritus-1.jpg",
        "credit": "By Dunpharlain - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=50626884"
      }, {
        "file": "ochlerotatus-detritus-2.jpg",
        "credit": "By James Lindsey at Ecology of Commanster, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=7207813"
      }],
      "group": "Mosquitoes",
      "character_states": {
        "156": [159],
        "203": [205],
        "206": [208],
        "207": [211],
        "212": [213, 214],
        "215": [216, 217],
        "218": [219, 220, 221, 222, 223],
        "224": [226],
        "250": [251, 252],
        "253": [254, 255],
        "256": [258],
        "153": [154, 155],
        "161": [162, 163],
        "164": [165, 166],
        "167": [169],
        "170": [171, 172],
        "173": [174, 175],
        "176": [177, 178],
        "179": [180, 181],
        "182": [183, 184],
        "185": [187],
        "188": [189, 190],
        "191": [192, 193, 196],
        "76": [77],
        "80": [81],
        "84": [91],
        "85": [95],
        "86": [97],
        "87": [108],
        "90": [89],
        "99": [101],
        "102": [104],
        "115": [117],
        "118": [120],
        "122": [124],
        "125": [127, 129, 131, 132],
        "134": [135],
        "259": [260, 261],
        "137": [139],
        "140": [142],
        "143": [145],
        "146": [148],
        "149": [150, 152],
        "197": [199],
        "200": [201],
        "231": [233],
        "235": [236, 237],
        "240": [242],
        "243": [245],
        "247": [248, 249]
      },
      "common_name": "Saltmarsh",
      "genus": "Ochlerotatus",
      "description": ["Ochlerotatus mosquito including the Salt marsh Mosquito (SMM) have been found in throughout the UK, mainly in flooded habitats like flooded marshes, temporary pools, wooded pools but also on vegetation near water systems", "Aggressive night time biters but will bite readily if disturbed in the day", "Individuals mostly bronze-brown with distinct golden/yellow markings", "Six very distinctive fragile long legs", "Long slender body frame with visible antennae", "Two Translucent wings with wing veins", "Long straw looking mouthpart used for feeding"],
      "bites_stings": ["Mosquito are regularly observed to bite people worldwide", "Initial bites are described as painless", "Where bitten extremely itchy small bumps may appear, these should disappear within 7 days", "Bites can also sometimes develop into blisters", "Bites often found on exposed areas of skin like arms/legs but can occur all over the body", "Localized symptoms from bites include itchiness, redness and discomfort", "Bites can become infected if scratched so avoiding this is very important", "There are many high street products available to prevent and relieve symptoms of bites", "Please see medical services for pre-travel mosquito advice if travelling abroad", "If bites become infected, you feel unwell after being bitten or you are concerned please contact a medical professional and pest management services"],
      "category": "Harmful",
      "warning": "Regularly bite people; spreads disease mainly in returning travellers",
      "resources": ["Blagrove MSC, Sherlock K, Chapman GE, Impoinvil DE, McCall PJ, Medlock JM, et al. Evaluation of the vector competence of a native UK mosquito Ochlerotatus detritus (Aedes detritus) for dengue, chikungunya and West Nile viruses. Parasit Vectors. 2016;9:452", "VA, England ME, Stoner J, et al. (2017) How often do mosquitoes bite humans in southern England? A standardised summer trial at four sites reveals spatial, temporal and site-related variation in biting rates. Parasit Vectors.;10(1):420.", "Medlock JM, Hansford KM, Anderson M, Mayho R, Snow KR. Mosquito nuisance and control in the UK - a questionnaire-based survey of local authorities. Eur Mosq Bull. 2012;30:15-29", "Malcolm CA. Public health issues posed by mosquitoes. An Independent Report. 2009;", "Medlock JM, Snow KR, Leach SA. Possible ecology and epidemiology of medically important mosquito-borne arboviruses in great Britain. Epidemiol Infect. 2007;135:466-482", "Service MW Feeding behaviour and host preferences of British mosquitoes. Bull Entomol Res. 1971;60:653-661.", "Medlock JM, Snow KR, Leach S. Potential transmission of West Nile virus in the British Isles: an ecological review of candidate mosquito bridge vectors. Medical and Veterinary Entomology. 2005;19:2-21"],
      "species": "Detritus"
    }, {
      "scientific_name": "Lymantria dispar",
      "images": [{
        "file": "lymantria-dispar-1.jpg",
        "credit": "By Didier Descouens - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=31208324"
      }, {
        "file": "lymantria-dispar-2.jpg",
        "credit": "By Didier Descouens - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=31211808"
      }],
      "group": "Moths",
      "character_states": {
        "156": [159],
        "203": [205],
        "206": [209],
        "207": [211],
        "212": [213, 214],
        "215": [216, 217],
        "218": [219, 220, 221, 222, 223],
        "224": [225],
        "250": [252],
        "253": [255],
        "256": [258],
        "153": [154],
        "161": [162],
        "164": [165],
        "167": [169],
        "170": [171, 172],
        "173": [174, 175],
        "176": [177, 178],
        "179": [181],
        "182": [184],
        "185": [187],
        "188": [190],
        "191": [192, 193],
        "76": [77],
        "80": [81],
        "84": [91],
        "85": [95],
        "86": [105],
        "87": [110],
        "90": [111],
        "112": [114],
        "99": [101],
        "102": [104],
        "115": [117],
        "118": [120],
        "122": [124],
        "125": [129, 132],
        "134": [135],
        "259": [261],
        "137": [139],
        "140": [142],
        "143": [145],
        "146": [148],
        "149": [152],
        "197": [199],
        "200": [201],
        "231": [233, 234],
        "235": [236, 237],
        "240": [242],
        "243": [245],
        "247": [249]
      },
      "common_name": "Gypsy Moth",
      "genus": "Lymantria",
      "species": "Dispar",
      "description": ["These moths are currently found all over Europe and the eastern USA", "Range in UK is expanding due to a warming climate", "Moth larvae prefer to feed on Oak trees but they can be found on many tree species", "Commonly seen in low numbers but occasionally huge population explosions occur", "Females look white with brown wing markings, males mostly light brown", "Large fan like visible wings", "Fine hairs that cause symptoms are very short and less visible", "Six legs as with Insect orders", "Bodies Look hairy with large visible antennae", "Lay eggs on tree trunks covered in froth and hairs in July and August"],
      "bites_stings": ["Moths and their caterpillars are covered in large numbers of tiny hairs which detach and cause health problems", "The hairs commonly cause a very itchy bumpy skin rash which can be all over the body", "Hairs can also cause sore throat and eye problems including conjunctivitis", "Most seriously they can cause breathing difficulty", "Localized symptoms from hairs includes itchiness, burning and rash formation", "Commonly most rashes only last hours but all should have disappeared within a few days", "Avoidance of the Moths and their caterpillars will help prevent symptoms", "If inhaled severe breathing problems can occur. If you inhale hairs and develop severe breathing difficulty please contact a medical professional or dial 999 immediately. Hairs getting into the eyes can also eye problems and an eye specialist should review these.", "See treatment pages for advice regarding hair removal and rash treatment."],
      "category": "Harmful",
      "warning": "Hairs can cause severe breathing difficulties",
      "resources": ["Kikuchi T, Kobayashi K, Sakata K, Akasaka T. Gypsy moth-induced dermatitis: a  hospital review and community survey. Eur J Dermatol. 2012 May-Jun;22(3):384-90", "Hossler E.W. (2010) Caterpillars and moths. Part I. Dermatologic manifestations of encounters with Lepidoptera Journal of the American Academy of Dermatology,  62  (1) , pp. 1-10.", "Rosen T. Caterpillar dermatitis. Dermatol Clin. 1990 Apr;8(2):245-52. Review.  PubMed PMID: 2191798.", "Balit CR, Ptolemy HC, Geary MJ, Russell RC, Isbister GK (2001). \"Outbreak of caterpillar dermatitis caused by airborne hairs of the mistletoe browntail moth (Euproctis edwardsi)\". Med. J. Aust. 175 (11-12): 641-643.", "RJC Cannon et al (2004) Gypsy moth, Lymantria dispar, outbreak in northeast London, 1995 - 2003, International Journal of Pest Management, 50:4, 259-273,", "DAVIDSON CB  GOTTSCHALK KW  JOHNSON JE  2001  European gypsy moth (Lymantria dispar L.) outbreaks: a review of the literature General Technical Report NE-278. Newtown Square, PA, U.S. Department of Agriculture, Forest Service, Northeastern Research Station  15 pp", "ROY, AS, McNAMARA, DG and SMITH, IM. 1995. Situation of Lymantria dispar in Europe. EPPO Bulletin, 25: 611-616", "Allen VT, Miller OF 3rd, Tyler WB. Gypsy moth caterpillar dermatitis--revisited. J Am Acad Dermatol. 1991 Jun;24(6 Pt 1):979-81"]
    }, {
      "scientific_name": "Euscorpius flavicaudis",
      "images": [{
        "file": "euscorpius-flavicaudis-0.jpg",
        "credit": "By BlueBreezeWiki - Own work, CC BY-SA 3.0,    https://commons.wikimedia.org/w/index.php?curid=52086352"
      }, {
        "file": "euscorpius-flavicaudis-2.jpg",
        "credit": "By Siga - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=5002257"
      }],
      "group": "Scorpions",
      "character_states": {
        "156": [157],
        "203": [205],
        "206": [209],
        "207": [210],
        "212": [213, 214],
        "215": [217],
        "218": [222, 223],
        "224": [226],
        "250": [251, 252],
        "253": [255],
        "256": [258],
        "153": [154],
        "161": [162],
        "164": [165, 166],
        "167": [169],
        "170": [171, 172],
        "173": [174, 175],
        "176": [178],
        "179": [181],
        "182": [183, 184],
        "185": [187],
        "188": [190],
        "191": [193],
        "76": [78],
        "80": [82],
        "84": [93],
        "99": [101],
        "102": [103],
        "115": [117],
        "118": [119],
        "122": [123],
        "125": [127, 128, 129],
        "134": [136],
        "259": [261],
        "137": [139],
        "140": [142],
        "143": [145],
        "146": [148],
        "149": [152],
        "197": [199],
        "200": [202],
        "231": [234],
        "235": [238, 239],
        "240": [242],
        "243": [244, 245],
        "247": [249]
      },
      "common_name": "Scorpion - Yellow Tailed",
      "genus": "Euscorpius",
      "species": "Flavicaudis",
      "description": ["Yellow-tailed Scorpions (YTS) are currently found in and around the isle of Sheppey, in Kent, Southern England", "Thought to have been introduced through maritime trade in the 19th century", "Does not use its stinger often and is not an aggressive species", "Individuals are mostly black with yellow/brown legs", "Around 35-45mm in length,", "Normally found individually, as they are ambush predators, in wall cracks and holes", "No Wings", "Eight legs", "Large front pincers and long slender tail with stinger at the end"],
      "bites_stings": ["YTS rarely sting people and are usually not aggressive", "Stings are normally described as ranging from a pin prick to a sharp pain", "People stung when hands pushed into scorpions holes or when they feel threatened", "Single stings normally occur", "Other than possible pain stings from YTS are generally harmless", "Localized symptoms from stings can include itchiness, swelling and pain to touch", "Commonly most sting swellings have a small central white spot surrounded by a red circle and will have disappeared within 7 days", "As with all stings, allergic reaction can occur when stung. If you suffer a major allergic reaction please dial 999 immediately. Symptoms of this can include breathing difficulties, dizziness and a swollen face/mouth."],
      "category": "Generally harmless, rarely uses stinger",
      "warning": "Severe Allergic reactions can occur",
      "resources": ["Lourenc\u0327o W. R. (2018). The evolution and distribution of noxious species of scorpions (Arachnida: Scorpiones). The journal of venomous animals and toxins including tropical diseases, 24, 1. doi:10.1186/s40409-017-0138-3", "Benton, T. March 1992. The ecology of the scorpion Euscorpius flavicaudis in England.. Journal of Zoology, 226: 351-368.", "Bawaskar HS, Bawaskar PH. Scorpion sting: update. J Assoc Physicians India. 2012;60:46-55.", "Dutto M, Dutto L, Scaglione N, Bertero M. Euscorpius (Scorpiones, Euscorpiidae): three cases of sting in northwestern Italy. J Venom Anim Toxins incl Trop Dis. 2010;16(4):659-63", "Schaper A, Desel H, Ebbecke M, De Haro L, Deters M, et al. Bites and sting by exotic pets in Europe: an 11 year analysis of 404 cases from Northeastern Germany and Southeastern France. Clin Toxicol (Phila). 2009;47(1):39-43.", "Amitai Y. Clinical manifestations and management of scorpion envenomation. Public Health Rev. 1998;26(3):257-63.", "Dutto, M, Dutto, L, Bertero, M, & Goyffon, M. (2012). Stings from Euscorpius flavicaudis (De Geer, 1778) (Scorpiones, Euscorpiidae) during pregnancy: a clinical case report. Journal of Venomous Animals and Toxins including Tropical Diseases, 18(4), 462-466.", "WANLESS, F. R. (1977): On the occurrence of the scorpionEuscorpius flavicaudis (De Geer) at Sheerness Port, Isle of Sheppey, Kent. Bull. Br. arachnol. Soc., 4(2): 74-76.", "Cloudsley-Thompson, J.L. & Constantinou, C. (1983) How does the scorpionEuscorpius flavicaudis (Deg.) manage to survive in Britain? Int J Biometeorol 27: 87.", "Chippaux J. P. (2012). Emerging options for the management of scorpion stings. Drug design, development and therapy, 6, 165-173. doi:10.2147/DDDT.S24754"]
    }, {
      "scientific_name": "Amaurobius ferox",
      "images": [{
        "file": "amaurobius-ferox-1.jpg",
        "credit": "By AJC ajcann.wordpress.com from UK - Black Lace Weaver, CC BY-SA 2.0, https://commons.wikimedia.org/w/index.php?curid=47555887"
      }, {
        "file": "amaurobius-ferox-2.jpg",
        "credit": "By gailhampshire from Cradley, Malvern, U.K - Amaurobius ferox. Black Lace-weaver, CC BY 2.0, https://commons.wikimedia.org/w/index.php?curid=49923384"
      }],
      "group": "Spiders",
      "character_states": {
        "156": [157],
        "203": [205],
        "206": [209],
        "207": [210],
        "212": [213, 214],
        "215": [217],
        "218": [221, 222, 223],
        "224": [226],
        "250": [251, 252],
        "253": [255],
        "256": [258],
        "153": [154, 155],
        "161": [162],
        "164": [165, 166],
        "167": [169],
        "170": [171, 172],
        "173": [174, 175],
        "176": [177, 178],
        "179": [181],
        "182": [183, 184],
        "185": [187],
        "188": [190],
        "191": [192, 193, 196],
        "76": [78],
        "80": [82],
        "84": [93],
        "99": [101],
        "102": [103],
        "115": [116],
        "118": [119],
        "122": [124],
        "125": [127, 128, 129],
        "134": [135, 136],
        "259": [261],
        "137": [139],
        "140": [142],
        "143": [145],
        "146": [148],
        "149": [152],
        "197": [198],
        "200": [202],
        "231": [232, 234],
        "235": [238, 239],
        "240": [241, 242],
        "243": [245],
        "247": [248, 249]
      },
      "common_name": "Black Lace-Weaver Spider",
      "genus": "Amaurobius",
      "species": "Multiple",
      "description": ["Lace weavers can be found mainly in England but their range is spreading North", "Construct lace webs around outside of homes and gardens", "Normally found outside on fences, walls and garden clutter", "Individuals are mainly dark brown to black, some yellowish markings on the abdomen", "20mm in body length", "Normally found individually", "Eight legs", "No Wings", "Can be seen in homes in autumn or after heavy rainfall"],
      "bites_stings": ["Spiders will rarely bite people and only when they feel threatened", "Bites have been described as ranging from mild discomfort to a very sharp pain", "Skin infection can occur if the bite wound is infected or skin is scratched and damaged", "Pain can last several hours after being bitten", "Localized symptoms from bites can include itchiness, swelling and pain", "Commonly most bite swellings are few and will have disappeared within 5-7 days", "As with many bites, allergic reaction can occur when bitten. If you suffer a major allergic reaction please dial 999 immediately. Symptoms of this can include breathing difficulties, dizziness and a swollen face/mouth.", "If you notice the bite has become infected please see a medical professional immediately. Symptoms of this include increased redness, pain, swelling and pus from the bite"],
      "category": "Generally harmless but can be painful biters",
      "warning": "Severe Allergic reactions can occur",
      "resources": ["Vetter RS, Bush SP. The diagnosis of brown recluse spider bite is overused for dermonecrotic wounds of uncertain etiology. Ann Emerg Med. 2002 May;39(5):544-6.", "Vetter RS, Isbister GK. Medical aspects of spider bites. Ann Rev Entomol. 2008;53:409-29", "Nentwig, W; Gna\u0308dinger, M; Fuchs, J; Ceschi, A (2013). \"A two year study of verified spider bites in Switzerland and a review of the European spider bite literature\". Toxicon. 73: 104-110.", "Maretic, Z., Lebez, D., 1979. Araneism with Special Reference to Europe.  Nolit Publishing, Belgrade.", "Kobelt, M., Nentwig, W., 2007. Alien spider introductions to Europe supported by global trade. Divers. Distrib. 14, 273-280", "Isbister, G.K., White, J., 2004. Clinical consequences of spider bites: recent advances in our understanding. Toxicon 43, 477-492", "Isbister, G.K., Gray, M.R., 2002a. A prospective study of 750 definite spider bites, with expert spider identification. Q. J. Med. 95, 723-731.", "https://www.nhm.ac.uk/content/dam/nhmwww/take-part/identify-nature/spiders-in-your-home-id-guide.pdf", "Sagdiev, N.Zh.; Valieva, L.A.; Korneev, A.S.; Sadykov, A.A.; Salikhov, Sh.I. (August 1987). \"Toxic components of the venom of the cellar spider Segestria florentina\". Bioorganicheskaia khimiia. 13 (8): 1013-1018.", "Bolzern, Angelo; Burckhardt, Daniel; Ha\u0308nggi, Ambros (2013). \"Phylogeny and taxonomy of European funnel-web spiders of the Tegenaria-Malthonica complex (Araneae: Agelenidae) based upon morphological and molecular data\". Zoological Journal of the Linnean Society. 168: 723-848", "Merrett, P. 1979. Changes in the distribution of British spiders and recent advances in knowledge of distribution. Bull. Br. arachnol. Soc. 4: 366-376.", "Stewart, J.A. 1987. Erigone aletris Crosby & Bishop and Tegenaria agrestis (Walckenaer): immigration through Leith docks in Scotland? Newsl. Br. arachnol. Soc. 49: 8.", "Vetter, R. S. & Isbister, G. K. 2008. Medical aspects of spider bites. Annu. Rev. Entomol. 53: 409-429", "Diaz JH. The global epidemiology, syndromic classification, management, and prevention of spider bites. Am J Trop Med Hyg. 2004 Aug;71(2):239-50.", "King LE. Spider Bites. Arch Dermatol. 1987;123(1):41-43. doi:10.1001/archderm.1987.01660250047015", "Vetter RS, Isbister GK. Do hobo spider bites cause dermonecrotic injuries? Ann Emerg Med. 2004 Dec;44(6):605-7. PubMed", "Sams, H.H., Dunnick, C.A., Smith, M.L. et al. Necrotic arachnidism. J Am Acad Dermatol. 2001; 44: 561-573", "Peter R. Harvey, David R.Nellist & Mark G. Telfer (2002) Provisional Atlas of British Spiders (Arachnida, Araneae), Volumes 1 & 2 Published by Biological Records Centre", "British Arachnological Society - http://britishspiders.org.uk"]
    }, {
      "scientific_name": "Argiope bruennichi",
      "images": [{
        "file": "argiope-bruennichi-1.jpg",
        "credit": "By \u6c60\u7530\u6b63\u6a39 (talk) masaki ikeda - Own work, Public Domain, https://commons.wikimedia.org/w/index.php?curid=4961775"
      }, {
        "file": "argiope-bruennichi-2.jpg",
        "credit": "By Andreas Eichler, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=29107985"
      }, {
        "file": "argiope-bruennichi-3.jpg",
        "credit": "By Aqua at Czech Wikipedia(Original text: Izabela Raszkova\u0301) - Transferred from cs.wikipedia to Commons.(Original text: vlastni\u0301 fotografie), Public Domain, https://commons.wikimedia.org/w/index.php?curid=2197373"
      }],
      "group": "Spiders",
      "character_states": {
        "156": [157],
        "203": [205],
        "206": [209],
        "207": [210],
        "212": [213, 214],
        "215": [217],
        "218": [221, 222, 223],
        "224": [226],
        "250": [251, 252],
        "253": [255],
        "256": [258],
        "153": [154, 155],
        "161": [162],
        "164": [165, 166],
        "167": [169],
        "170": [171, 172],
        "173": [174, 175],
        "176": [177, 178],
        "179": [181],
        "182": [183, 184],
        "185": [187],
        "188": [190],
        "191": [192, 193],
        "76": [78],
        "80": [82],
        "84": [93],
        "99": [101],
        "102": [103],
        "115": [116],
        "118": [119],
        "122": [124],
        "125": [127, 128, 132],
        "134": [135],
        "259": [261],
        "137": [139],
        "140": [142],
        "143": [145],
        "146": [148],
        "149": [152],
        "197": [198],
        "200": [202],
        "231": [232, 234],
        "235": [238, 239],
        "240": [242],
        "243": [245],
        "247": [248, 249]
      },
      "common_name": "Wasp Spider",
      "genus": "Argiope",
      "species": "Bruennichi",
      "description": ["Wasp spiders can be found mainly in Southern England in the UK but range is spreading", "Construct webs between vegetation such as leaves/flowers and long grass", "Normally found outside rather than in human residencies", "Individuals have very distinctive black and yellow stripes/markings on their abdomens", "5-15mm in body length", "Normally found individually", "Eight legs", "No Wings", "Egg sacs sometimes seen around webs"],
      "bites_stings": ["Spiders will rarely bite people and only when they feel threatened", "Bites have been described as ranging from mild discomfort to a sharp pain", "Skin infection can occur if the bite wound is infected or skin is scratched and damaged", "Some reports of pain radiating to other body parts but this is debated", "Localized symptoms from bites can include itchiness, swelling and pain", "Commonly most bite swellings are few and will have disappeared within 5-7 days", "As with many bites, allergic reaction can occur when bitten. If you suffer a major allergic reaction please dial 999 immediately. Symptoms of this can include breathing difficulties, dizziness and a swollen face/mouth.", "If you notice the bite has become infected please see a medical professional immediately. Symptoms of this include increased redness, pain, swelling and pus from the bite"],
      "category": "Generally harmless but can be painful biters",
      "warning": "Severe Allergic reactions can occur",
      "resources": ["Vetter RS, Bush SP. The diagnosis of brown recluse spider bite is overused for dermonecrotic wounds of uncertain etiology. Ann Emerg Med. 2002 May;39(5):544-6.", "Vetter RS, Isbister GK. Medical aspects of spider bites. Ann Rev Entomol. 2008;53:409-29", "Nentwig, W; Gna\u0308dinger, M; Fuchs, J; Ceschi, A (2013). \"A two year study of verified spider bites in Switzerland and a review of the European spider bite literature\". Toxicon. 73: 104-110.", "Maretic, Z., Lebez, D., 1979. Araneism with Special Reference to Europe.  Nolit Publishing, Belgrade.", "Kobelt, M., Nentwig, W., 2007. Alien spider introductions to Europe supported by global trade. Divers. Distrib. 14, 273-280", "Isbister, G.K., White, J., 2004. Clinical consequences of spider bites: recent advances in our understanding. Toxicon 43, 477-492", "Isbister, G.K., Gray, M.R., 2002a. A prospective study of 750 definite spider bites, with expert spider identification. Q. J. Med. 95, 723-731.", "https://www.nhm.ac.uk/content/dam/nhmwww/take-part/identify-nature/spiders-in-your-home-id-guide.pdf", "Sagdiev, N.Zh.; Valieva, L.A.; Korneev, A.S.; Sadykov, A.A.; Salikhov, Sh.I. (August 1987). \"Toxic components of the venom of the cellar spider Segestria florentina\". Bioorganicheskaia khimiia. 13 (8): 1013-1018.", "Bolzern, Angelo; Burckhardt, Daniel; Ha\u0308nggi, Ambros (2013). \"Phylogeny and taxonomy of European funnel-web spiders of the Tegenaria-Malthonica complex (Araneae: Agelenidae) based upon morphological and molecular data\". Zoological Journal of the Linnean Society. 168: 723-848", "Merrett, P. 1979. Changes in the distribution of British spiders and recent advances in knowledge of distribution. Bull. Br. arachnol. Soc. 4: 366-376.", "Stewart, J.A. 1987. Erigone aletris Crosby & Bishop and Tegenaria agrestis (Walckenaer): immigration through Leith docks in Scotland? Newsl. Br. arachnol. Soc. 49: 8.", "Vetter, R. S. & Isbister, G. K. 2008. Medical aspects of spider bites. Annu. Rev. Entomol. 53: 409-429", "Diaz JH. The global epidemiology, syndromic classification, management, and prevention of spider bites. Am J Trop Med Hyg. 2004 Aug;71(2):239-50.", "King LE. Spider Bites. Arch Dermatol. 1987;123(1):41-43. doi:10.1001/archderm.1987.01660250047015", "Vetter RS, Isbister GK. Do hobo spider bites cause dermonecrotic injuries? Ann Emerg Med. 2004 Dec;44(6):605-7. PubMed", "Sams, H.H., Dunnick, C.A., Smith, M.L. et al. Necrotic arachnidism. J Am Acad Dermatol. 2001; 44: 561-573", "Peter R. Harvey, David R.Nellist & Mark G. Telfer (2002) Provisional Atlas of British Spiders (Arachnida, Araneae), Volumes 1 & 2 Published by Biological Records Centre", "British Arachnological Society - http://britishspiders.org.uk"]
    }, {
      "scientific_name": "Eratigena agrestis",
      "images": [{
        "file": "eratigena-agrestis-1.jpg",
        "credit": "By Rainer Altenkamp, Berlin - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=2998183"
      }, {
        "file": "eratigena-agrestis-2.jpg",
        "credit": "By Judgeking - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=23172491CC"
      }, {
        "file": "eratigena-agrestis-3.jpg",
        "credit": "BY 2.0, https://commons.wikimedia.org/w/index.php?curid=157025"
      }],
      "group": "Spiders",
      "character_states": {
        "156": [157],
        "203": [205],
        "206": [209],
        "207": [210],
        "212": [213, 214],
        "215": [217],
        "218": [221, 222, 223],
        "224": [226],
        "250": [251, 252],
        "253": [255],
        "256": [258],
        "153": [154, 155],
        "161": [162],
        "164": [165, 166],
        "167": [169],
        "170": [171, 172],
        "173": [174, 175],
        "176": [177, 178],
        "179": [181],
        "182": [183, 184],
        "185": [187],
        "188": [190],
        "191": [192, 193, 196],
        "76": [78],
        "80": [82],
        "84": [93],
        "99": [101],
        "102": [103],
        "115": [116],
        "118": [119],
        "122": [124],
        "125": [127, 128, 129],
        "134": [135],
        "259": [261],
        "137": [139],
        "140": [142],
        "143": [145],
        "146": [148],
        "149": [152],
        "197": [198],
        "200": [202],
        "231": [232, 234],
        "235": [238, 239],
        "240": [242],
        "243": [245],
        "247": [248, 249]
      },
      "common_name": "Hobo",
      "genus": "Eratigena",
      "species": "Agrestis",
      "description": ["Hobo spiders can be found in Europe, the USA, Canada and Asia", "Construct funnel/trampoline shaped webs in piles of wood, brick walls, garages", "Normally found outside and rarely enter human residences", "Individuals are brown with V shaped markings on the abdomen pointing at the head", "7-14mm in body length, up to 45mm including leg length", "Normally found individually", "Eight legs with no colour stripes", "No Wings", "Can be very fast running"],
      "bites_stings": ["Spiders will rarely bite people and only when they feel threatened", "Bites have been described as ranging from mild discomfort to a sharp pain", "Skin infection can occur if the bite wound is infected or skin is scratched and damaged", "Some reports of necrotic skin lesions occurring from bites but there is much debate", "Localized symptoms from bites can include itchiness, swelling and pain", "Commonly most bite swellings are few and will have disappeared within 5-7 days", "As with many bites, allergic reaction can occur when bitten. If you suffer a major allergic reaction please dial 999 immediately. Symptoms of this can include breathing difficulties, dizziness and a swollen face/mouth.", "If you notice the bite has become infected please see a medical professional immediately. Symptoms of this include increased redness, pain, swelling and pus from the bite"],
      "category": "Generally harmless but can be painful biters",
      "warning": "Severe Allergic reactions can occur",
      "resources": ["Vetter RS, Bush SP. The diagnosis of brown recluse spider bite is overused for dermonecrotic wounds of uncertain etiology. Ann Emerg Med. 2002 May;39(5):544-6.", "Vetter RS, Isbister GK. Medical aspects of spider bites. Ann Rev Entomol. 2008;53:409-29", "Nentwig, W; Gna\u0308dinger, M; Fuchs, J; Ceschi, A (2013). \"A two year study of verified spider bites in Switzerland and a review of the European spider bite literature\". Toxicon. 73: 104-110.", "Maretic, Z., Lebez, D., 1979. Araneism with Special Reference to Europe.  Nolit Publishing, Belgrade.", "Kobelt, M., Nentwig, W., 2007. Alien spider introductions to Europe supported by global trade. Divers. Distrib. 14, 273-280", "Isbister, G.K., White, J., 2004. Clinical consequences of spider bites: recent advances in our understanding. Toxicon 43, 477-492", "Isbister, G.K., Gray, M.R., 2002a. A prospective study of 750 definite spider bites, with expert spider identification. Q. J. Med. 95, 723-731.", "https://www.nhm.ac.uk/content/dam/nhmwww/take-part/identify-nature/spiders-in-your-home-id-guide.pdf", "Sagdiev, N.Zh.; Valieva, L.A.; Korneev, A.S.; Sadykov, A.A.; Salikhov, Sh.I. (August 1987). \"Toxic components of the venom of the cellar spider Segestria florentina\". Bioorganicheskaia khimiia. 13 (8): 1013-1018.", "Bolzern, Angelo; Burckhardt, Daniel; Ha\u0308nggi, Ambros (2013). \"Phylogeny and taxonomy of European funnel-web spiders of the Tegenaria-Malthonica complex (Araneae: Agelenidae) based upon morphological and molecular data\". Zoological Journal of the Linnean Society. 168: 723-848", "Merrett, P. 1979. Changes in the distribution of British spiders and recent advances in knowledge of distribution. Bull. Br. arachnol. Soc. 4: 366-376.", "Stewart, J.A. 1987. Erigone aletris Crosby & Bishop and Tegenaria agrestis (Walckenaer): immigration through Leith docks in Scotland? Newsl. Br. arachnol. Soc. 49: 8.", "Vetter, R. S. & Isbister, G. K. 2008. Medical aspects of spider bites. Annu. Rev. Entomol. 53: 409-429", "Diaz JH. The global epidemiology, syndromic classification, management, and prevention of spider bites. Am J Trop Med Hyg. 2004 Aug;71(2):239-50.", "King LE. Spider Bites. Arch Dermatol. 1987;123(1):41-43. doi:10.1001/archderm.1987.01660250047015", "Vetter RS, Isbister GK. Do hobo spider bites cause dermonecrotic injuries? Ann Emerg Med. 2004 Dec;44(6):605-7. PubMed", "Sams, H.H., Dunnick, C.A., Smith, M.L. et al. Necrotic arachnidism. J Am Acad Dermatol. 2001; 44: 561-573", "Peter R. Harvey, David R.Nellist & Mark G. Telfer (2002) Provisional Atlas of British Spiders (Arachnida, Araneae), Volumes 1 & 2 Published by Biological Records Centre", "British Arachnological Society - http://britishspiders.org.uk"]
    }, {
      "scientific_name": "Nuctenea umbratica",
      "images": [{
        "file": "nuctenea-umbratica-0.jpg",
        "credit": "By Daniel VILLAFRUELA, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=51307070"
      }, {
        "file": "nuctenea-umbratica-3.jpg",
        "credit": "By Magnefl - Own work, CC BY-SA 4.0,"
      }, {
        "file": "nuctenea-umbratica-4.jpg",
        "credit": "By Andre\u0301 Karwath aka Aka - Own work, CC BY-SA 2.5, https://commons.wikimedia.org/w/index.php?curid=19971997"
      }],
      "group": "Spiders",
      "character_states": {
        "156": [157],
        "203": [205],
        "206": [209],
        "207": [210],
        "212": [213, 214],
        "215": [217],
        "218": [221, 222, 223],
        "224": [226],
        "250": [251, 252],
        "253": [255],
        "256": [258],
        "153": [154, 155],
        "161": [162],
        "164": [165, 166],
        "167": [169],
        "170": [171, 172],
        "173": [174, 175],
        "176": [177, 178],
        "179": [181],
        "182": [183, 184],
        "185": [187],
        "188": [190],
        "191": [192, 193, 194, 195, 196],
        "76": [78],
        "80": [82],
        "84": [93],
        "99": [101],
        "102": [103],
        "115": [116],
        "118": [119],
        "122": [124],
        "125": [126, 128, 129, 131, 132, 133],
        "134": [135, 136],
        "259": [261],
        "137": [139],
        "140": [142],
        "143": [145],
        "146": [148],
        "149": [152],
        "197": [198],
        "200": [202],
        "231": [232, 234],
        "235": [238, 239],
        "240": [242],
        "243": [245],
        "247": [248, 249]
      },
      "common_name": "Walnut Orb-Weaver Spider",
      "genus": "Nuctenea",
      "species": "Umbratica",
      "description": ["Walnut orb-weavers can be found mainly in England but their range is spreading North", "Construct round orb webs around outside of homes and gardens", "Normally found outside in wall cracks and under wood or rocks", "Individuals can be reddish brown to black with leaf like markings on the edges of the abdomen", "5-15mm in body length", "Normally found individually", "Eight legs with coloured bands on them", "No Wings"],
      "bites_stings": ["Spiders will rarely bite people and only when they feel threatened", "Bites have been described as ranging from mild discomfort to a very sharp pain", "Skin infection can occur if the bite wound is infected or skin is scratched and damaged", "Pain can last several hours after being bitten", "Localized symptoms from bites can include itchiness, swelling and pain", "Commonly most bite swellings are few and will have disappeared within 5-7 days", "As with many bites, allergic reaction can occur when bitten. If you suffer a major allergic reaction please dial 999 immediately. Symptoms of this can include breathing difficulties, dizziness and a swollen face/mouth.", "If you notice the bite has become infected please see a medical professional immediately. Symptoms of this include increased redness, pain, swelling and pus from the bite"],
      "category": "Generally harmless but can be painful biters",
      "warning": "Severe Allergic reactions can occur",
      "resources": ["Vetter RS, Bush SP. The diagnosis of brown recluse spider bite is overused for dermonecrotic wounds of uncertain etiology. Ann Emerg Med. 2002 May;39(5):544-6.", "Vetter RS, Isbister GK. Medical aspects of spider bites. Ann Rev Entomol. 2008;53:409-29", "Nentwig, W; Gna\u0308dinger, M; Fuchs, J; Ceschi, A (2013). \"A two year study of verified spider bites in Switzerland and a review of the European spider bite literature\". Toxicon. 73: 104-110.", "Maretic, Z., Lebez, D., 1979. Araneism with Special Reference to Europe.  Nolit Publishing, Belgrade.", "Kobelt, M., Nentwig, W., 2007. Alien spider introductions to Europe supported by global trade. Divers. Distrib. 14, 273-280", "Isbister, G.K., White, J., 2004. Clinical consequences of spider bites: recent advances in our understanding. Toxicon 43, 477-492", "Isbister, G.K., Gray, M.R., 2002a. A prospective study of 750 definite spider bites, with expert spider identification. Q. J. Med. 95, 723-731.", "https://www.nhm.ac.uk/content/dam/nhmwww/take-part/identify-nature/spiders-in-your-home-id-guide.pdf", "Sagdiev, N.Zh.; Valieva, L.A.; Korneev, A.S.; Sadykov, A.A.; Salikhov, Sh.I. (August 1987). \"Toxic components of the venom of the cellar spider Segestria florentina\". Bioorganicheskaia khimiia. 13 (8): 1013-1018.", "Bolzern, Angelo; Burckhardt, Daniel; Ha\u0308nggi, Ambros (2013). \"Phylogeny and taxonomy of European funnel-web spiders of the Tegenaria-Malthonica complex (Araneae: Agelenidae) based upon morphological and molecular data\". Zoological Journal of the Linnean Society. 168: 723-848", "Merrett, P. 1979. Changes in the distribution of British spiders and recent advances in knowledge of distribution. Bull. Br. arachnol. Soc. 4: 366-376.", "Stewart, J.A. 1987. Erigone aletris Crosby & Bishop and Tegenaria agrestis (Walckenaer): immigration through Leith docks in Scotland? Newsl. Br. arachnol. Soc. 49: 8.", "Vetter, R. S. & Isbister, G. K. 2008. Medical aspects of spider bites. Annu. Rev. Entomol. 53: 409-429", "Diaz JH. The global epidemiology, syndromic classification, management, and prevention of spider bites. Am J Trop Med Hyg. 2004 Aug;71(2):239-50.", "King LE. Spider Bites. Arch Dermatol. 1987;123(1):41-43. doi:10.1001/archderm.1987.01660250047015", "Vetter RS, Isbister GK. Do hobo spider bites cause dermonecrotic injuries? Ann Emerg Med. 2004 Dec;44(6):605-7. PubMed", "Sams, H.H., Dunnick, C.A., Smith, M.L. et al. Necrotic arachnidism. J Am Acad Dermatol. 2001; 44: 561-573", "Peter R. Harvey, David R.Nellist & Mark G. Telfer (2002) Provisional Atlas of British Spiders (Arachnida, Araneae), Volumes 1 & 2 Published by Biological Records Centre", "British Arachnological Society - http://britishspiders.org.uk"]
    }, {
      "scientific_name": "Segestria florentina",
      "images": [{
        "file": "segestria-florentina-1.jpg",
        "credit": "By Luis Miguel Bugallo Sa\u0301nchez (Lmbuga Commons)(Lmbuga Galipedia) - Commons., CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=884054"
      }, {
        "file": "segestria-florentina-2.jpg",
        "credit": "By Luis Miguel Bugallo Sa\u0301nchez (Lmbuga Commons)(Lmbuga Galipedia) - Self made. http://commons.wikimedia.org/w/index.php?title=Image:Ara%C3%B1a_Mandaio_07-0-2006_13.jpg, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=768765"
      }, {
        "file": "segestria-florentina-3.jpg",
        "credit": "By Luis Miguel Bugallo Sa\u0301nchez (Lmbuga Commons)(Lmbuga Galipedia) - Self made. File:Aran\u0303a_Mandaio_07-05-2006_05.jpg, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=768752"
      }],
      "group": "Spiders",
      "character_states": {
        "156": [157],
        "203": [205],
        "206": [209],
        "207": [210],
        "212": [213, 214],
        "215": [217],
        "218": [221, 222, 223],
        "224": [226],
        "250": [251, 252],
        "253": [255],
        "256": [258],
        "153": [154, 155],
        "161": [162],
        "164": [165, 166],
        "167": [169],
        "170": [171, 172],
        "173": [174, 175],
        "176": [177, 178],
        "179": [181],
        "182": [183, 184],
        "185": [187],
        "188": [190],
        "191": [192, 193],
        "76": [78],
        "80": [82],
        "84": [93],
        "99": [101],
        "102": [103],
        "115": [116],
        "118": [119],
        "122": [124],
        "125": [128, 130],
        "134": [135],
        "259": [261],
        "137": [139],
        "140": [142],
        "143": [145],
        "146": [148],
        "149": [152],
        "197": [198],
        "200": [202],
        "231": [232, 234],
        "235": [238, 239],
        "240": [241, 242],
        "243": [245],
        "247": [248, 249]
      },
      "common_name": "Tube-Web Spider",
      "genus": "Segestria",
      "species": "Florentina",
      "description": ["Tube web spiders can be found mainly in England but their range is spreading North", "Construct tube like webs often in wall cracks, hollowed wood and rock piles", "Normally found outside rather than in human residencies", "Individuals are black, occasionally with a green looking shine", "10-22mm in body length", "Normally found individually", "Eight legs", "No Wings", "Mouthparts can reflect a striking green colour"],
      "bites_stings": ["Spiders will rarely bite people and only when they feel threatened", "Bites have been described as ranging from mild discomfort to a very sharp pain", "Skin infection can occur if the bite wound is infected or skin is scratched and damaged", "Pain can last several hours after being bitten", "Localized symptoms from bites can include itchiness, swelling and pain", "Commonly most bite swellings are few and will have disappeared within 5-7 days", "As with many bites, allergic reaction can occur when bitten. If you suffer a major allergic reaction please dial 999 immediately. Symptoms of this can include breathing difficulties, dizziness and a swollen face/mouth.", "If you notice the bite has become infected please see a medical professional immediately. Symptoms of this include increased redness, pain, swelling and pus from the bite"],
      "category": "Generally harmless but can be painful biters",
      "warning": "Severe Allergic reactions can occur",
      "resources": ["Vetter RS, Bush SP. The diagnosis of brown recluse spider bite is overused for dermonecrotic wounds of uncertain etiology. Ann Emerg Med. 2002 May;39(5):544-6.", "Vetter RS, Isbister GK. Medical aspects of spider bites. Ann Rev Entomol. 2008;53:409-29", "Nentwig, W; Gna\u0308dinger, M; Fuchs, J; Ceschi, A (2013). \"A two year study of verified spider bites in Switzerland and a review of the European spider bite literature\". Toxicon. 73: 104-110.", "Maretic, Z., Lebez, D., 1979. Araneism with Special Reference to Europe.  Nolit Publishing, Belgrade.", "Kobelt, M., Nentwig, W., 2007. Alien spider introductions to Europe supported by global trade. Divers. Distrib. 14, 273-280", "Isbister, G.K., White, J., 2004. Clinical consequences of spider bites: recent advances in our understanding. Toxicon 43, 477-492", "Isbister, G.K., Gray, M.R., 2002a. A prospective study of 750 definite spider bites, with expert spider identification. Q. J. Med. 95, 723-731.", "https://www.nhm.ac.uk/content/dam/nhmwww/take-part/identify-nature/spiders-in-your-home-id-guide.pdf", "Sagdiev, N.Zh.; Valieva, L.A.; Korneev, A.S.; Sadykov, A.A.; Salikhov, Sh.I. (August 1987). \"Toxic components of the venom of the cellar spider Segestria florentina\". Bioorganicheskaia khimiia. 13 (8): 1013-1018.", "Bolzern, Angelo; Burckhardt, Daniel; Ha\u0308nggi, Ambros (2013). \"Phylogeny and taxonomy of European funnel-web spiders of the Tegenaria-Malthonica complex (Araneae: Agelenidae) based upon morphological and molecular data\". Zoological Journal of the Linnean Society. 168: 723-848", "Merrett, P. 1979. Changes in the distribution of British spiders and recent advances in knowledge of distribution. Bull. Br. arachnol. Soc. 4: 366-376.", "Stewart, J.A. 1987. Erigone aletris Crosby & Bishop and Tegenaria agrestis (Walckenaer): immigration through Leith docks in Scotland? Newsl. Br. arachnol. Soc. 49: 8.", "Vetter, R. S. & Isbister, G. K. 2008. Medical aspects of spider bites. Annu. Rev. Entomol. 53: 409-429", "Diaz JH. The global epidemiology, syndromic classification, management, and prevention of spider bites. Am J Trop Med Hyg. 2004 Aug;71(2):239-50.", "King LE. Spider Bites. Arch Dermatol. 1987;123(1):41-43. doi:10.1001/archderm.1987.01660250047015", "Vetter RS, Isbister GK. Do hobo spider bites cause dermonecrotic injuries? Ann Emerg Med. 2004 Dec;44(6):605-7. PubMed", "Sams, H.H., Dunnick, C.A., Smith, M.L. et al. Necrotic arachnidism. J Am Acad Dermatol. 2001; 44: 561-573", "Peter R. Harvey, David R.Nellist & Mark G. Telfer (2002) Provisional Atlas of British Spiders (Arachnida, Araneae), Volumes 1 & 2 Published by Biological Records Centre", "British Arachnological Society - http://britishspiders.org.uk"]
    }, {
      "scientific_name": "Steatoda nobilis",
      "images": [{
        "file": "steatoda-nobilis-1.jpg",
        "credit": "By Photograph by Brenda Avery - Own work, Copyrighted free use, https://commons.wikimedia.org/w/index.php?curid=1525130"
      }, {
        "file": "steatoda-nobilis-2.jpg",
        "credit": "By Alvesgaspar - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=4555625"
      }, {
        "file": "steatoda-nobilis-3.jpg",
        "credit": "By Photograph by Brenda Avery - Own work, Copyrighted free use, https://commons.wikimedia.org/w/index.php?curid=1510638"
      }],
      "group": "Spiders",
      "character_states": {
        "156": [157],
        "203": [205],
        "206": [209],
        "207": [210],
        "212": [213, 214],
        "215": [217],
        "218": [221, 222, 223],
        "224": [226],
        "250": [251, 252],
        "253": [255],
        "256": [258],
        "153": [154, 155],
        "161": [162],
        "164": [165, 166],
        "167": [169],
        "170": [171, 172],
        "173": [174, 175],
        "176": [177, 178],
        "179": [181],
        "182": [183, 184],
        "185": [187],
        "188": [190],
        "191": [192, 193],
        "76": [78],
        "80": [82],
        "84": [93],
        "99": [101],
        "102": [103],
        "115": [116],
        "118": [119],
        "122": [124],
        "125": [127, 128, 129, 132, 133],
        "134": [136],
        "259": [261],
        "137": [139],
        "140": [142],
        "143": [145],
        "146": [148],
        "149": [152],
        "197": [198],
        "200": [202],
        "231": [232, 234],
        "235": [238, 239],
        "240": [242],
        "243": [245],
        "247": [248, 249]
      },
      "common_name": "False Widow",
      "genus": "Steatoda",
      "species": "Multiple",
      "description": ["False widows can be found mostly in southern England but its range is spreading North", "Construct tangled webs that are normally created off the ground", "Can be found in kitchens, greenhouses, sheds, garages and conservatories", "Individuals are black or brown with cream coloured markings on a bulbous abdomen", "7-14mm in length", "Normally found individually", "Eight legs", "No Wings", "Cream coloured markings on the top of the abdomen can resemble a face"],
      "bites_stings": ["Spiders will rarely bite people and only when they feel threatened", "Bites have been described as ranging from mild discomfort to a sharp pain", "Skin infection can occur if the bite wound is infected or skin is scratched and damaged", "False widow venom normally only causes pain lasting up to 24 hours", "Localized symptoms from bites can include itchiness, swelling and pain", "Commonly most bite swellings are few and will have disappeared within 5-7 days", "As with many bites, allergic reaction can occur when bitten. If you suffer a major allergic reaction please dial 999 immediately. Symptoms of this can include breathing difficulties, dizziness and a swollen face/mouth.", "If you notice the bite has become infected please see a medical professional immediately. Symptoms of this include increased redness, pain, swelling and pus from the bite"],
      "category": "Generally harmless but can be painful biters",
      "warning": "Severe Allergic reactions can occur",
      "resources": ["Vetter RS, Bush SP. The diagnosis of brown recluse spider bite is overused for dermonecrotic wounds of uncertain etiology. Ann Emerg Med. 2002 May;39(5):544-6.", "Vetter RS, Isbister GK. Medical aspects of spider bites. Ann Rev Entomol. 2008;53:409-29", "Nentwig, W; Gna\u0308dinger, M; Fuchs, J; Ceschi, A (2013). \"A two year study of verified spider bites in Switzerland and a review of the European spider bite literature\". Toxicon. 73: 104-110.", "Maretic, Z., Lebez, D., 1979. Araneism with Special Reference to Europe.  Nolit Publishing, Belgrade.", "Kobelt, M., Nentwig, W., 2007. Alien spider introductions to Europe supported by global trade. Divers. Distrib. 14, 273-280", "Isbister, G.K., White, J., 2004. Clinical consequences of spider bites: recent advances in our understanding. Toxicon 43, 477-492", "Isbister, G.K., Gray, M.R., 2002a. A prospective study of 750 definite spider bites, with expert spider identification. Q. J. Med. 95, 723-731.", "https://www.nhm.ac.uk/content/dam/nhmwww/take-part/identify-nature/spiders-in-your-home-id-guide.pdf", "Sagdiev, N.Zh.; Valieva, L.A.; Korneev, A.S.; Sadykov, A.A.; Salikhov, Sh.I. (August 1987). \"Toxic components of the venom of the cellar spider Segestria florentina\". Bioorganicheskaia khimiia. 13 (8): 1013-1018.", "Bolzern, Angelo; Burckhardt, Daniel; Ha\u0308nggi, Ambros (2013). \"Phylogeny and taxonomy of European funnel-web spiders of the Tegenaria-Malthonica complex (Araneae: Agelenidae) based upon morphological and molecular data\". Zoological Journal of the Linnean Society. 168: 723-848", "Merrett, P. 1979. Changes in the distribution of British spiders and recent advances in knowledge of distribution. Bull. Br. arachnol. Soc. 4: 366-376.", "Stewart, J.A. 1987. Erigone aletris Crosby & Bishop and Tegenaria agrestis (Walckenaer): immigration through Leith docks in Scotland? Newsl. Br. arachnol. Soc. 49: 8.", "Vetter, R. S. & Isbister, G. K. 2008. Medical aspects of spider bites. Annu. Rev. Entomol. 53: 409-429", "Diaz JH. The global epidemiology, syndromic classification, management, and prevention of spider bites. Am J Trop Med Hyg. 2004 Aug;71(2):239-50.", "King LE. Spider Bites. Arch Dermatol. 1987;123(1):41-43. doi:10.1001/archderm.1987.01660250047015", "Vetter RS, Isbister GK. Do hobo spider bites cause dermonecrotic injuries? Ann Emerg Med. 2004 Dec;44(6):605-7. PubMed", "Sams, H.H., Dunnick, C.A., Smith, M.L. et al. Necrotic arachnidism. J Am Acad Dermatol. 2001; 44: 561-573", "Peter R. Harvey, David R.Nellist & Mark G. Telfer (2002) Provisional Atlas of British Spiders (Arachnida, Araneae), Volumes 1 & 2 Published by Biological Records Centre", "British Arachnological Society - http://britishspiders.org.uk"]
    }, {
      "scientific_name": "Dermacentor reticulatus",
      "images": [{
        "file": "dermacentor-reticulatus-1.jpg",
        "credit": "By I, Accipiter, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=2631625"
      }, {
        "file": "dermacentor-reticulatus-2.jpg",
        "credit": "By Krzysztof Ziarnek, Kenraiz - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=76818612"
      }],
      "group": "Ticks",
      "character_states": {
        "156": [159],
        "203": [205],
        "206": [208, 209],
        "207": [210],
        "212": [213, 214],
        "215": [217],
        "218": [220, 221, 222, 223],
        "224": [226],
        "250": [251, 252],
        "253": [255],
        "256": [258],
        "153": [154],
        "161": [162, 163],
        "164": [165],
        "167": [168],
        "170": [171, 172],
        "173": [174, 175],
        "176": [177, 178],
        "179": [181],
        "182": [184],
        "185": [186, 187],
        "188": [190],
        "191": [192, 193],
        "76": [78],
        "80": [82],
        "84": [93],
        "99": [101],
        "102": [103],
        "115": [116],
        "118": [119],
        "122": [124],
        "125": [127, 129, 131, 132],
        "134": [136],
        "259": [261],
        "137": [139],
        "140": [141, 142],
        "143": [145],
        "146": [148],
        "149": [150, 152],
        "197": [198],
        "200": [202],
        "231": [232, 234],
        "235": [238],
        "240": [242],
        "243": [245],
        "247": [249]
      },
      "common_name": "Ornate Cow Tick",
      "genus": "Dermacentor",
      "species": "Reticulatus",
      "description": ["Ornate Cow Ticks (OCT) are found throughout Europe. In the UK mostly seen in Wales, Devon and Essex", "Prevalent in areas such as marshes, wetlands, coastal dunes, woodlands and grassland", "Avid biters of humans", "Normally found individually rather than in groups", "Individual's mostly brown with a very ornate looking pattern on the body", "After feeding ticks will swell, looking much more rounded, and become a grey colour", "2 - 4mm in length, can swell to around 10 - 11mm when fed", "Eight legs", "No wings", "Most active in Spring and Autumn: March to June and then August to October"],
      "bites_stings": ["Dermacentor ticks are more rarely encountered than some other Tick species in the UK", "Initial bites are described as painless", "If you find a tick still attached to the skin, remove it as soon as possible: see treatment page", "Where bitten an itchy small red bump may appear, which can sometimes become a blister", "Bites often found on exposed areas of skin like arms/legs but can occur all over the body", "Localized symptoms from bites include itchiness, redness, bruising and swelling", "Bites can become infected if scratched so avoiding this is very important", "These ticks can transmit diseases, although currently this is mainly in returning travellers and pets such as dogs. If you notice any symptoms after being bitten please see a medical professional. Symptoms can include: a rash, fever, headache, confusion and flu-like symptoms", "If bites become infected, you feel unwell after being bitten or you are concerned please contact a medical professional"],
      "category": "Harmful, will readily bite people",
      "warning": "Can spread disease, such as Rickettsia and Babesia",
      "resources": ["PHE (2013) Ticks and your health: information about tick bite risks and prevention. Public Health England..", "Juckett, G. (2013) Arthropod bites. American Family Physician. 88(12), 841-847.", "Due, C., Fox, W., Medlock, J. and et al. (2013) Tick bite prevention and tick removal. BMJ. 347, f7123.", "British Infection Association (2011) The epidemiology, prevention, investigation and treatment of Lyme borreliosis in United Kingdom patients: a position statement by the British Infection Association. Journal of Infection. 62(5), 329-338.", "ECDC (2018) Tick-borne diseases. European Centre for Disease Prevention and Control. ecdc.europa.eu/en/tick-borne-diseases", "PHE (2018b) 'Be tick aware' - Toolkit for raising awareness of the potential risk posed by ticks and tick-borne disease in England.Public Health England. assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/694157/PHE_Tick_Awareness_Toolkit.PDF", "Shapiro,E. (2014) Lyme disease (clinical practice). New England Journal of Medicine. 370(18), 1724-1731.", "European Centre for Disease Prevention and Control and European Food Safety Authority. Tick maps [internet]. Stockholm: ECDC; 2019. Available from:", "Fo\u0308ldva\u0301ri, G; S\u030ciroky\u0301, P; Szekeres, S; Majoros, G; Sprong, H (1 June 2016). . Parasites & Vectors. 9 (1): 314. :.", "Walker, M.D. (2018).  (). Antenna: Royal Entomological Society. 42 (2): 61-65", "Jameson LJ, Morgan PJ, Medlock JM, Watola G, Vaux AG. Importation of Hyalomma marginatum, vector of Crimean-Congo haemorrhagic fever virus, into the United Kingdom by migratory birds. Ticks Tick Borne Dis. 2012 Apr;3(2):95-9.", "Jameson LJ, Medlock JM. Tick surveillance in Great Britain. Vector Borne Zoonotic Dis. 2011 Apr;11(4):403-12."]
    }, {
      "scientific_name": "Hyalomma marginatum",
      "images": [{
        "file": "hyalomma-marginatum-1.jpg",
        "credit": "ahref=\"//commons.wikimedia.org/wiki/User:Adam_Cuerden\" title=\"User:Adam Cuerden\">Adam Cuerden</a> - <span class=\"int-own-work\" lang=\"en\">Own work</span>, Public Domain, <a href=\"https://commons.wikimedia.org/w/index.php?curid=3148918\">Link</a>"
      }],
      "group": "Ticks",
      "character_states": {
        "156": [159],
        "203": [205],
        "206": [208, 209],
        "207": [210],
        "212": [213, 214],
        "215": [217],
        "218": [220, 221, 222, 223],
        "224": [226],
        "250": [251, 252],
        "253": [255],
        "256": [258],
        "153": [154],
        "161": [162, 163],
        "164": [165],
        "167": [168],
        "170": [171, 172],
        "173": [174, 175],
        "176": [177, 178],
        "179": [181],
        "182": [184],
        "185": [186, 187],
        "188": [190],
        "191": [192],
        "76": [78],
        "80": [82],
        "84": [93],
        "99": [101],
        "102": [103],
        "115": [116],
        "118": [119],
        "122": [124],
        "125": [126, 127, 129, 131, 132, 133],
        "134": [135],
        "259": [261],
        "137": [139],
        "140": [141, 142],
        "143": [145],
        "146": [148],
        "149": [150, 152],
        "197": [198],
        "200": [202],
        "231": [232, 234],
        "235": [238],
        "240": [242],
        "243": [245],
        "247": [249]
      },
      "common_name": "Bont-legged Tick",
      "genus": "Hyalomma",
      "species": "Marginatum",
      "description": ["Hyalomma marginatum is currently only an introduced tick species to the UK rather than an established one. Last reports were of a small number seen on the south west coast", "These ticks can be transported across continents by cattle and birds on which they feed", "Avid biters of humans", "If found on people normally found individually rather than in groups", "Individual's mostly dark brown or reddish brown with a banded colour on their legs", "After feeding ticks will swell, looking much more rounded, and become a grey colour", "5 - 6mm in length, can swell to around 12 - 17mm when fed", "Eight legs", "No wings", "Mostly active in Spring to summer time"],
      "bites_stings": ["Hyalomma ticks are extremely rare in the UK, only introduced into areas by hosts like birds", "Initial bites are described as painless", "If you find a tick still attached to the skin, remove it as soon as possible: see treatment page", "Where bitten an itchy small red bump may appear, which can sometimes become a blister", "Bites often found on exposed areas of skin like arms/legs but can occur all over the body", "Localized symptoms from bites include itchiness, redness, bruising and swelling", "Bites can become infected if scratched so avoiding this is very important", "These ticks can transmit diseases, although currently this is mainly in returning travellers and pets such as dogs. If you notice any symptoms after being bitten please see a medical professional. Symptoms can include: a rash, fever, headache, confusion, abdominal pain, diarrhea and flu-like symptoms", "If bites become infected, you feel unwell after being bitten or you are concerned please contact a medical professional"],
      "category": "Harmful, will readily bite people",
      "warning": "Can spread disease, such as Crimean Congo Haemorrhagic Fever",
      "resources": ["PHE (2013) Ticks and your health: information about tick bite risks and prevention. Public Health England..", "Juckett, G. (2013) Arthropod bites. American Family Physician. 88(12), 841-847.", "Due, C., Fox, W., Medlock, J. and et al. (2013) Tick bite prevention and tick removal. BMJ. 347, f7123.", "British Infection Association (2011) The epidemiology, prevention, investigation and treatment of Lyme borreliosis in United Kingdom patients: a position statement by the British Infection Association. Journal of Infection. 62(5), 329-338.", "ECDC (2018) Tick-borne diseases. European Centre for Disease Prevention and Control. ecdc.europa.eu/en/tick-borne-diseases", "PHE (2018b) 'Be tick aware' - Toolkit for raising awareness of the potential risk posed by ticks and tick-borne disease in England.Public Health England. assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/694157/PHE_Tick_Awareness_Toolkit.PDF", "Shapiro,E. (2014) Lyme disease (clinical practice). New England Journal of Medicine. 370(18), 1724-1731.", "European Centre for Disease Prevention and Control and European Food Safety Authority. Tick maps [internet]. Stockholm: ECDC; 2019. Available from:", "Fo\u0308ldva\u0301ri, G; S\u030ciroky\u0301, P; Szekeres, S; Majoros, G; Sprong, H (1 June 2016). . Parasites & Vectors. 9 (1): 314. :.", "Walker, M.D. (2018).  (). Antenna: Royal Entomological Society. 42 (2): 61-65", "Jameson LJ, Morgan PJ, Medlock JM, Watola G, Vaux AG. Importation of Hyalomma marginatum, vector of Crimean-Congo haemorrhagic fever virus, into the United Kingdom by migratory birds. Ticks Tick Borne Dis. 2012 Apr;3(2):95-9.", "Jameson LJ, Medlock JM. Tick surveillance in Great Britain. Vector Borne Zoonotic Dis. 2011 Apr;11(4):403-12."]
    }, {
      "scientific_name": "Ixodes ricinus",
      "images": [{
        "file": "ixodes-ricinus-1.jpg",
        "credit": "By Bart\u0142omiej Bulicz - Own work, CC BY-SA 4.0,"
      }, {
        "file": "ixodes-ricinus-2.jpg",
        "credit": "By H. Krisp - Own work, CC BY 3.0, https://commons.wikimedia.org/w/index.php?curid=16316859"
      }],
      "group": "Ticks",
      "character_states": {
        "156": [159],
        "203": [205],
        "206": [208, 209],
        "207": [210],
        "212": [213, 214],
        "215": [217],
        "218": [220, 221, 222, 223],
        "224": [226],
        "250": [251, 252],
        "253": [255],
        "256": [258],
        "153": [154],
        "161": [162, 163],
        "164": [165],
        "167": [168],
        "170": [171, 172],
        "173": [174, 175],
        "176": [177, 178],
        "179": [181],
        "182": [184],
        "185": [186, 187],
        "188": [190],
        "191": [192, 193, 194, 195, 196],
        "76": [78],
        "80": [82],
        "84": [93],
        "99": [101],
        "102": [103],
        "115": [116],
        "118": [119],
        "122": [124],
        "125": [126, 128, 129, 131, 132, 133],
        "134": [136],
        "259": [261],
        "137": [139],
        "140": [141, 142],
        "143": [145],
        "146": [148],
        "149": [150, 152],
        "197": [198],
        "200": [202],
        "231": [232, 234],
        "235": [238],
        "240": [242],
        "243": [245],
        "247": [249]
      },
      "common_name": "Castor Bean Tick",
      "genus": "Ixodes",
      "species": "Ricinus",
      "description": ["Castor Bean Ticks (CBT) are found throughout Europe, being found as far north as Iceland", "Mostly prevalent in areas where its common hosts: sheep, deer, cattle, horses etc., are present, such as woodland, long grass meadows, heaths, farmland, parks, golf courses", "Avid biters of humans", "Normally found individually", "Individual's mostly dark brown to black. Posterior part of abdomen can be orange", "After feeding ticks will swell, looking much more rounded, and become a grey colour", "2 - 4mm in length, can swell to around 11mm when fed", "Eight legs", "No wings", "Most active in Spring and Autumn: March to June and then August to October"],
      "bites_stings": ["Ixodes ticks are probably the most commonly encountered Tick in the UK", "Initial bites are described as painless", "If you find a tick still attached to the skin, remove it as soon as possible: see treatment page", "Where bitten an itchy small red bump may appear, which can sometimes become blisters", "Bites often found on exposed areas of skin like arms/legs but can occur all over the body", "Localized symptoms from bites include itchiness, redness, bruising and swelling", "Bites can become infected if scratched so avoiding this is very important", "Ticks can transmit Lyme diseases and Tick borne Encephalitis. If you notice any symptoms of these please see a medical professional. Symptoms can include: a rash that looks like a bull's eye on a dartboard/big red circle, fever, headache, confusion and flu-like symptoms", "If bites become infected, you feel unwell after being bitten or you are concerned please contact a medical professional"],
      "category": "Harmful, will readily bite people",
      "warning": "Spread disease such as Lyme and Tick Borne Encephalitis Complex",
      "resources": ["PHE (2013) Ticks and your health: information about tick bite risks and prevention. Public Health England..", "Juckett, G. (2013) Arthropod bites. American Family Physician. 88(12), 841-847.", "Due, C., Fox, W., Medlock, J. and et al. (2013) Tick bite prevention and tick removal. BMJ. 347, f7123.", "British Infection Association (2011) The epidemiology, prevention, investigation and treatment of Lyme borreliosis in United Kingdom patients: a position statement by the British Infection Association. Journal of Infection. 62(5), 329-338.", "ECDC (2018) Tick-borne diseases. European Centre for Disease Prevention and Control. ecdc.europa.eu/en/tick-borne-diseases", "PHE (2018b) 'Be tick aware' - Toolkit for raising awareness of the potential risk posed by ticks and tick-borne disease in England.Public Health England. assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/694157/PHE_Tick_Awareness_Toolkit.PDF", "Shapiro,E. (2014) Lyme disease (clinical practice). New England Journal of Medicine. 370(18), 1724-1731.", "European Centre for Disease Prevention and Control and European Food Safety Authority. Tick maps [internet]. Stockholm: ECDC; 2019. Available from:", "Fo\u0308ldva\u0301ri, G; S\u030ciroky\u0301, P; Szekeres, S; Majoros, G; Sprong, H (1 June 2016). . Parasites & Vectors. 9 (1): 314. :.", "Walker, M.D. (2018).  (). Antenna: Royal Entomological Society. 42 (2): 61-65", "Jameson LJ, Morgan PJ, Medlock JM, Watola G, Vaux AG. Importation of Hyalomma marginatum, vector of Crimean-Congo haemorrhagic fever virus, into the United Kingdom by migratory birds. Ticks Tick Borne Dis. 2012 Apr;3(2):95-9.", "Jameson LJ, Medlock JM. Tick surveillance in Great Britain. Vector Borne Zoonotic Dis. 2011 Apr;11(4):403-12."]
    }, {
      "scientific_name": "Dolichovespula saxonica",
      "images": [{
        "file": "dolichovespula-saxonica-1.jpg",
        "credit": "By Sandy Rae - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=18693313"
      }, {
        "file": "dolichovespula-saxonica-2.jpg",
        "credit": "By S. Rae from Scotland, UK - Dolichovespula saxonica (male), CC BY 2.0, https://commons.wikimedia.org/w/index.php?curid=30001215"
      }],
      "group": "Wasps",
      "character_states": {
        "156": [157],
        "203": [205],
        "206": [209],
        "207": [210],
        "212": [214],
        "215": [217],
        "218": [221, 223],
        "224": [226],
        "250": [252],
        "253": [255],
        "256": [258],
        "153": [154],
        "161": [162],
        "164": [165, 166],
        "167": [169],
        "170": [171, 172],
        "173": [174, 175],
        "176": [177, 178],
        "179": [180, 181],
        "182": [184],
        "185": [187],
        "188": [190],
        "191": [192, 193, 196],
        "76": [77],
        "80": [81],
        "84": [91],
        "85": [95],
        "86": [97],
        "87": [108],
        "90": [111],
        "112": [114],
        "99": [101],
        "102": [103],
        "115": [117],
        "118": [120],
        "122": [123],
        "125": [127, 128],
        "134": [135],
        "259": [261],
        "137": [139],
        "140": [142],
        "143": [145],
        "146": [148],
        "149": [152],
        "197": [199],
        "200": [201],
        "231": [232],
        "235": [236, 237],
        "240": [242],
        "243": [245],
        "247": [248]
      },
      "common_name": "Saxon Wasp",
      "genus": "Dolichovespula",
      "species": "Saxonica",
      "description": ["Saxon Wasps are found across much of the UK including as North as Scotland", "They are very common, stings mostly due to frequent human interaction during warm months around outdoor food areas like picnics and BBQs", "Individuals are characteristically black and yellow striped with 3 dots on their heads", "Wasps are 12-20mm in length, queens can be slightly larger", "Normally found individually but nests also often discovered within residential buildings. Can be seen around flowers, eating areas, food establishments, orchards", "Wings for flight and characteristic 'buzzing' sound present", "Six legs as with insect orders and two visible antennae", "Slender waist just before a rounded abdomen", "Possess stinger that can be used multiple times"],
      "bites_stings": ["Wasps sting many people every year, but are usually not aggressive unless they or their nest is threatened", "Stings are normally described as a sharp pain", "Multiple stings can occur as, unlike a Bee, a wasp does not leave behind its stinger in the skin. Alarm pheromones can attract other related wasps to become aggressive", "Other than the pain, stings from Wasps are generally harmless", "Localized symptoms from stings have included itchiness, swelling and pain to touch", "Commonly most sting swellings have a small central white spot surrounded by a red circle and will have disappeared within 7 days", "As with all stings, allergic reaction can occur when stung. If you suffer a major allergic reaction please dial 999 immediately. Symptoms of this can include breathing difficulties, dizziness and a swollen face/mouth."],
      "category": "Generally harmless, only sting when they feel threatened",
      "warning": "Severe Allergic reactions can occur",
      "resources": ["ANZCOR (2016) Guideline 9.4.3 - Envenomation from Tick Bites and Bee, Wasp and Ant Stings. Australian Resuscitation Council and New Zealand Resuscitation Council.", "Krishna, M., Ewan, P., Diwakar, L. and et al. (2011) Diagnosis and management of hymenoptera venom allergy: British Society for Allergy and Clinical Immunology (BSACI) guidelines. Clinical and experimental allergy. 41(9), 1201-1220.", "Golden, D., Moffitt, J., Nicklas, R. and et al. (2011) Stinging insect hypersensitivity: a practice parameter update 2011.Journal of Allergy and Clinical Immunology. 127(4), 852-854.", "Przybilla, B. and and Rueff, F. (2012) Insect stings: clinical features and management. Deutsches Arzteblatt international.109(13), 238-248", "Archer, Michael E (2006). \"Taxonomy, Distribution and Nesting Biology of Species of the Genus Dolichovespula (Hymenoptera, Vespidae)\". Entomological Science. 9 (3): 281-93", "Carpenter, James M.; Glare, Travis R.  (PDF). AMNH Research Library Digital Repository. American Museum of Natural History.", "P. Gopalakrishnakone (1990). \"Differences between wasps and bees\". A Colour guide to dangerous animals. NUS Press. p. 47.", "Philip B. Mortenson (2008). \"Bee \u00b7 Wasp \u00b7 Hornet \u00b7 Ant\". How to tell a turtle from a tortoise: a close look at nature's most confusing terms. Barnes & Noble.", "Kevin T. Fitzgerald; Rebecca Vera (2006). \"Insects \u2014 Hymenoptera\". In Michael Edward Peterson; Patricia A. Talcott (eds.). Small animal toxicology (2nd ed.). Elsevier Health Sciences."]
    }, {
      "scientific_name": "Vespa crabo",
      "images": [{
        "file": "vespa-crabo-1.jpg",
        "credit": "By Flugwapsch62 - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=16640505"
      }, {
        "file": "vespa-crabo-2.jpg",
        "credit": "By Flugwapsch62 - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=16640500"
      }],
      "group": "Wasps",
      "character_states": {
        "156": [157],
        "203": [205],
        "206": [209],
        "207": [210],
        "212": [214],
        "215": [217],
        "218": [221, 223],
        "224": [226],
        "250": [252],
        "253": [255],
        "256": [258],
        "153": [154],
        "161": [162],
        "164": [165, 166],
        "167": [169],
        "170": [171, 172],
        "173": [174, 175],
        "176": [177, 178],
        "179": [180, 181],
        "182": [184],
        "185": [187],
        "188": [190],
        "191": [192, 193, 196],
        "76": [77],
        "80": [81],
        "84": [91],
        "85": [95],
        "86": [97],
        "87": [108],
        "90": [111],
        "112": [114],
        "99": [101],
        "102": [103],
        "115": [117],
        "118": [120],
        "122": [123],
        "125": [127, 128, 133],
        "134": [135],
        "259": [261],
        "137": [139],
        "140": [142],
        "143": [145],
        "146": [148],
        "149": [152],
        "197": [199],
        "200": [201],
        "231": [232],
        "235": [236, 237],
        "240": [242],
        "243": [245],
        "247": [248]
      },
      "common_name": "European Hornet",
      "genus": "Vespa",
      "species": "Crabro",
      "description": ["European Hornets are found across much of the UK including as North as Scotland", "They are very common and stings are mostly due to frequent human interaction during the warm spring/summer months", "Individuals are reddish/orange with distinct yellow and black face/bands", "Wasps are 25-35mm in length, much larger than common wasps", "Normally found individually but nests also often discovered within attics of residential buildings, hollowed out trees or wall gaps and are brown in colour", "Wings for flight and characteristic 'buzzing' sound present", "Six legs as with insect orders and two visible antennae", "Slender waist just before a rounded abdomen", "Possess stinger that can be used multiple times"],
      "bites_stings": ["Hornets do sting many people every year, but are usually not aggressive unless they feel, or their nest, is threatened", "Stings from hornets can be very painful and described as a very sharp pain", "Multiple stings can occur as, unlike a Bee, a hornet does not leave behind its stinger in the skin. Alarm pheromones can also attract other colony members to become aggressive", "Other than the pain, stings from Wasps are generally harmless", "Localized symptoms from stings have included itchiness, swelling and pain to touch", "Commonly most sting swellings have a small central white spot surrounded by a red circle and will have disappeared within 7 days", "As with all stings, allergic reaction can occur when stung. If you suffer a major allergic reaction please dial 999 immediately. Symptoms of this can include breathing difficulties, dizziness and a swollen face/mouth."],
      "category": "Generally harmless, only sting when they feel threatened",
      "warning": "Severe Allergic reactions can occur",
      "resources": ["ANZCOR (2016) Guideline 9.4.3 - Envenomation from Tick Bites and Bee, Wasp and Ant Stings. Australian Resuscitation Council and New Zealand Resuscitation Council.", "Krishna, M., Ewan, P., Diwakar, L. and et al. (2011) Diagnosis and management of hymenoptera venom allergy: British Society for Allergy and Clinical Immunology (BSACI) guidelines. Clinical and experimental allergy. 41(9), 1201-1220.", "Golden, D., Moffitt, J., Nicklas, R. and et al. (2011) Stinging insect hypersensitivity: a practice parameter update 2011.Journal of Allergy and Clinical Immunology. 127(4)", "Przybilla, B. and and Rueff, F. (2012) Insect stings: clinical features and management. Deutsches Arzteblatt international.109(13), 238-248", "Archer, Michael E (2006). \"Taxonomy, Distribution and Nesting Biology of Species of the Genus Dolichovespula (Hymenoptera, Vespidae)\". Entomological Science. 9 (3)", "Carpenter, James M.; Glare, Travis R.  (PDF). AMNH Research Library Digital Repository. American Museum of Natural History.", "P. Gopalakrishnakone (1990). \"Differences between wasps and bees\". A Colour guide to dangerous animals. NUS Press. p. 47.", "Philip B. Mortenson (2008). \"Bee \u00b7 Wasp \u00b7 Hornet \u00b7 Ant\". How to tell a turtle from a tortoise: a close look at nature's most confusing terms. Barnes & Noble.", "Kevin T. Fitzgerald; Rebecca Vera (2006). \"Insects \u2014 Hymenoptera\". In Michael Edward Peterson; Patricia A. Talcott (eds.). Small animal toxicology (2nd ed.). Elsevier Health Sciences.", "Perrard, A.; Pickett, K. M.; Villemant, C.; Kojima, J.; Carpenter, J (2013). \"Phylogeny of hornets: a total evidence approach (Hymenoptera, Vespidae, Vespinae, Vespa)\". Journal of Hymenoptera Research. 32: 1-15."]
    }, {
      "scientific_name": "Vespula vulgaris",
      "images": [{
        "file": "vespula-vulgaris-1.jpg",
        "credit": "By Martin Cooper from Ipswich, UK - Common Wasp (Vespula (Paravespula) vulgaris), CC BY 2.0, https://commons.wikimedia.org/w/index.php?curid=39113619"
      }, {
        "file": "vespula-vulgaris-2.jpg",
        "credit": "By Sid Mosdell from New Zealand - Common Wasp, CC BY 2.0, https://commons.wikimedia.org/w/index.php?curid=70733982"
      }, {
        "file": "vespula-vulgaris-3.jpg",
        "credit": "By M van Ree - Vespula vulgaris, CC BY-SA 2.0, https://commons.wikimedia.org/w/index.php?curid=42072503"
      }],
      "group": "Wasps",
      "character_states": {
        "156": [157],
        "203": [205],
        "206": [209],
        "207": [210],
        "212": [214],
        "215": [217],
        "218": [221, 223],
        "224": [226],
        "250": [252],
        "253": [255],
        "256": [258],
        "153": [154],
        "161": [162],
        "164": [165, 166],
        "167": [169],
        "170": [171, 172],
        "173": [174, 175],
        "176": [177, 178],
        "179": [180, 181],
        "182": [184],
        "185": [187],
        "188": [190],
        "191": [192, 193, 194, 195, 196],
        "76": [77],
        "80": [81],
        "84": [91],
        "85": [95],
        "86": [97],
        "87": [108],
        "90": [111],
        "112": [114],
        "99": [101],
        "102": [103],
        "115": [117],
        "118": [120],
        "122": [123],
        "125": [127, 128],
        "134": [135],
        "259": [261],
        "137": [139],
        "140": [142],
        "143": [145],
        "146": [148],
        "149": [152],
        "197": [199],
        "200": [201],
        "231": [232],
        "235": [236, 237],
        "240": [242],
        "243": [245],
        "247": [248]
      },
      "common_name": "Common Wasp",
      "genus": "Vespula",
      "species": "Vulgaris",
      "description": ["Common Wasps are now found almost worldwide", "They are very common, stings mostly due to frequent human interaction during warm months around outdoor food areas like picnics and BBQs", "Individuals are characteristically black and yellow striped", "Wasps are 12-20mm in length, queens can be slightly larger", "Normally found individually and commonly seen around flowers, vegetable blooms, eating areas, food establishments, orchards", "Wings for flight and characteristic 'buzzing' sound present", "Six legs as with insect orders and two visible antennae", "Slender waist just before a rounded abdomen", "Possess stinger that can be used multiple times"],
      "bites_stings": ["Wasps sting many people every year, but are usually not aggressive unless they or their nest is threatened", "Stings are normally described as a sharp pain", "Multiple stings can occur as, unlike a Bee, a wasp does not leave behind its stinger in the skin", "Other than the pain stings from Wasps are generally harmless", "Localized symptoms from stings have included itchiness, swelling and pain to touch", "Commonly most sting swellings have a small central white spot surrounded by a red circle and will have disappeared within 7 days", "As with all stings, allergic reaction can occur when stung. If you suffer a major allergic reaction please dial 999 immediately. Symptoms of this can include breathing difficulties, dizziness and a swollen face/mouth."],
      "category": "Generally harmless, only sting when they feel threatened",
      "warning": "Severe Allergic reactions can occur",
      "resources": ["ANZCOR (2016) Guideline 9.4.3 - Envenomation from Tick Bites and Bee, Wasp and Ant Stings. Australian Resuscitation Council and New Zealand Resuscitation Council.", "Krishna, M., Ewan, P., Diwakar, L. and et al. (2011) Diagnosis and management of hymenoptera venom allergy: British Society for Allergy and Clinical Immunology (BSACI) guidelines. Clinical and experimental allergy. 41(9), 1201-1220.", "Golden, D., Moffitt, J., Nicklas, R. and et al. (2011) Stinging insect hypersensitivity: a practice parameter update 2011.Journal of Allergy and Clinical Immunology. 127(4), 852-854.", "Przybilla, B. and and Rueff, F. (2012) Insect stings: clinical features and management. Deutsches Arzteblatt international.109(13), 238-248", "Archer, Michael E (2006). \"Taxonomy, Distribution and Nesting Biology of Species of the Genus Dolichovespula (Hymenoptera, Vespidae)\". Entomological Science. 9 (3): 281-93", "Carpenter, James M.; Glare, Travis R.  (PDF). AMNH Research Library Digital Repository. American Museum of Natural History.", "P. Gopalakrishnakone (1990). \"Differences between wasps and bees\". A Colour guide to dangerous animals. NUS Press. p. 47.", "Philip B. Mortenson (2008). \"Bee \u00b7 Wasp \u00b7 Hornet \u00b7 Ant\". How to tell a turtle from a tortoise: a close look at nature's most confusing terms. Barnes & Noble.", "Kevin T. Fitzgerald; Rebecca Vera (2006). \"Insects \u2014 Hymenoptera\". In Michael Edward Peterson; Patricia A. Talcott (eds.). Small animal toxicology (2nd ed.). Elsevier Health Sciences."]
    }],
    characters: [{
      "id": 156,
      "label": "Sudden, sharp pain",
      "states": [{
        "id": 157,
        "label": "Yes"
      }, {
        "id": 159,
        "label": "No"
      }],
      "is_yes_no": true,
      "group": "symptoms"
    }, {
      "id": 203,
      "label": "Stinger left behind",
      "states": [{
        "id": 204,
        "label": "Yes"
      }, {
        "id": 205,
        "label": "No"
      }],
      "is_yes_no": true,
      "group": "symptoms"
    }, {
      "id": 206,
      "label": "Multiple small bumps",
      "states": [{
        "id": 208,
        "label": "Yes"
      }, {
        "id": 209,
        "label": "No"
      }],
      "is_yes_no": true,
      "group": "symptoms"
    }, {
      "id": 207,
      "label": "Single swollen bump",
      "states": [{
        "id": 210,
        "label": "Yes"
      }, {
        "id": 211,
        "label": "No"
      }],
      "is_yes_no": true,
      "group": "symptoms"
    }, {
      "id": 212,
      "label": "Blisters over bite",
      "states": [{
        "id": 213,
        "label": "Yes"
      }, {
        "id": 214,
        "label": "No"
      }],
      "is_yes_no": true,
      "group": "symptoms"
    }, {
      "id": 215,
      "label": "In lines/rows or clusters",
      "states": [{
        "id": 216,
        "label": "Yes"
      }, {
        "id": 217,
        "label": "No"
      }],
      "is_yes_no": true,
      "group": "symptoms"
    }, {
      "id": 218,
      "label": "Where on body?",
      "states": [{
        "id": 219,
        "label": "Head"
      }, {
        "id": 220,
        "label": "Torso"
      }, {
        "id": 221,
        "label": "Arms"
      }, {
        "id": 222,
        "label": "Legs"
      }, {
        "id": 223,
        "label": "Hands/feet"
      }],
      "is_yes_no": false,
      "group": "symptoms"
    }, {
      "id": 224,
      "label": "Hairs/touch irritating",
      "states": [{
        "id": 225,
        "label": "Yes"
      }, {
        "id": 226,
        "label": "No"
      }],
      "is_yes_no": true,
      "group": "symptoms"
    }, {
      "id": 250,
      "label": "Bullseye, multiple rings/rash around bite",
      "states": [{
        "id": 251,
        "label": "Yes"
      }, {
        "id": 252,
        "label": "No"
      }],
      "is_yes_no": true,
      "group": "symptoms"
    }, {
      "id": 253,
      "label": "Red halo around multiple small red bumps",
      "states": [{
        "id": 254,
        "label": "Yes"
      }, {
        "id": 255,
        "label": "No"
      }],
      "is_yes_no": true,
      "group": "symptoms"
    }, {
      "id": 256,
      "label": "Irritable liquid released/sprayed by insect",
      "states": [{
        "id": 257,
        "label": "Yes"
      }, {
        "id": 258,
        "label": "No"
      }],
      "is_yes_no": true,
      "group": "symptoms"
    }, {
      "id": 153,
      "label": "Time of day",
      "states": [{
        "id": 154,
        "label": "Day"
      }, {
        "id": 155,
        "label": "Night"
      }],
      "is_yes_no": false,
      "group": "when"
    }, {
      "id": 161,
      "label": "One-off bite or multiple over time",
      "states": [{
        "id": 162,
        "label": "One-off"
      }, {
        "id": 163,
        "label": "Multiple"
      }],
      "is_yes_no": false,
      "group": "when"
    }, {
      "id": 164,
      "label": "Outside or inside",
      "states": [{
        "id": 165,
        "label": "Outside"
      }, {
        "id": 166,
        "label": "Inside"
      }],
      "is_yes_no": false,
      "group": "where"
    }, {
      "id": 167,
      "label": "Check pet",
      "states": [{
        "id": 168,
        "label": "Bites/insects in fur"
      }, {
        "id": 169,
        "label": "No bites/insects in fur"
      }],
      "is_yes_no": false,
      "group": "where"
    }, {
      "id": 170,
      "label": "Hunting, fishing, hiking before bite/sting",
      "states": [{
        "id": 171,
        "label": "Yes"
      }, {
        "id": 172,
        "label": "No"
      }],
      "is_yes_no": true,
      "group": "where"
    }, {
      "id": 173,
      "label": "Work in garden before bite/sting",
      "states": [{
        "id": 174,
        "label": "Yes"
      }, {
        "id": 175,
        "label": "No"
      }],
      "is_yes_no": true,
      "group": "where"
    }, {
      "id": 176,
      "label": "Digging or fruit picking",
      "states": [{
        "id": 177,
        "label": "Yes"
      }, {
        "id": 178,
        "label": "No"
      }],
      "is_yes_no": true,
      "group": "where"
    }, {
      "id": 179,
      "label": "Eating when bitten/stung",
      "states": [{
        "id": 180,
        "label": "Yes"
      }, {
        "id": 181,
        "label": "No"
      }],
      "is_yes_no": true,
      "group": "where"
    }, {
      "id": 182,
      "label": "In attic, shed, garage, basement when bitten/stung",
      "states": [{
        "id": 183,
        "label": "Yes"
      }, {
        "id": 184,
        "label": "No"
      }],
      "is_yes_no": true,
      "group": "where"
    }, {
      "id": 185,
      "label": "Working with birds or bats",
      "states": [{
        "id": 186,
        "label": "Yes"
      }, {
        "id": 187,
        "label": "No"
      }],
      "is_yes_no": true,
      "group": "where"
    }, {
      "id": 188,
      "label": "Hotel/hostel stay last few days",
      "states": [{
        "id": 189,
        "label": "Yes"
      }, {
        "id": 190,
        "label": "No"
      }],
      "is_yes_no": true,
      "group": "where"
    }, {
      "id": 191,
      "label": "Area of uk it occurred",
      "states": [{
        "id": 192,
        "label": "South-west"
      }, {
        "id": 193,
        "label": "South-east"
      }, {
        "id": 194,
        "label": "North-west"
      }, {
        "id": 195,
        "label": "North-east"
      }, {
        "id": 196,
        "label": "Central"
      }],
      "is_yes_no": false,
      "group": "where"
    }, {
      "id": 76,
      "label": "Leg pairs",
      "states": [{
        "id": 77,
        "label": "3"
      }, {
        "id": 78,
        "label": "4"
      }, {
        "id": 79,
        "label": "5 or more"
      }],
      "is_yes_no": false,
      "group": "what"
    }, {
      "id": 80,
      "label": "Antennae visible",
      "states": [{
        "id": 81,
        "label": "Yes"
      }, {
        "id": 82,
        "label": "No"
      }],
      "is_yes_no": true,
      "group": "what"
    }, {
      "id": 84,
      "label": "Presence",
      "states": [{
        "id": 91,
        "label": "Present"
      }, {
        "id": 93,
        "label": "Absent"
      }],
      "is_yes_no": false,
      "group": "what"
    }, {
      "id": 85,
      "label": "Shape",
      "states": [{
        "id": 95,
        "label": "Narrow"
      }, {
        "id": 96,
        "label": "Broad"
      }],
      "is_yes_no": false,
      "group": "what"
    }, {
      "id": 86,
      "label": "Colour",
      "states": [{
        "id": 97,
        "label": "Translucent"
      }, {
        "id": 105,
        "label": "Brown"
      }, {
        "id": 106,
        "label": "Green"
      }, {
        "id": 107,
        "label": "Black"
      }],
      "is_yes_no": false,
      "group": "what"
    }, {
      "id": 87,
      "label": "Appearance",
      "states": [{
        "id": 108,
        "label": "Membranous"
      }, {
        "id": 109,
        "label": "Shell - like/hard"
      }, {
        "id": 110,
        "label": "Looks furry"
      }],
      "is_yes_no": false,
      "group": "what"
    }, {
      "id": 90,
      "label": "Pair number",
      "states": [{
        "id": 89,
        "label": "One"
      }, {
        "id": 111,
        "label": "Two"
      }],
      "is_yes_no": false,
      "group": "what"
    }, {
      "id": 112,
      "label": "Pair size",
      "states": [{
        "id": 113,
        "label": "Same size"
      }, {
        "id": 114,
        "label": "Different size"
      }],
      "is_yes_no": false,
      "group": "what"
    }, {
      "id": 99,
      "label": "Forceps on its bottom?",
      "states": [{
        "id": 100,
        "label": "Present"
      }, {
        "id": 101,
        "label": "Absent"
      }],
      "is_yes_no": false,
      "group": "what"
    }, {
      "id": 102,
      "label": "Mouth appearance",
      "states": [{
        "id": 103,
        "label": "Jaws"
      }, {
        "id": 104,
        "label": "Straw/tube like"
      }],
      "is_yes_no": false,
      "group": "what"
    }, {
      "id": 115,
      "label": "Body shape",
      "states": [{
        "id": 116,
        "label": "Oval/round, broad"
      }, {
        "id": 117,
        "label": "Long/enlongate"
      }, {
        "id": 246,
        "label": "Laterally flattened"
      }],
      "is_yes_no": false,
      "group": "what"
    }, {
      "id": 118,
      "label": "Body sections",
      "states": [{
        "id": 119,
        "label": "Two"
      }, {
        "id": 120,
        "label": "Three"
      }, {
        "id": 121,
        "label": "Four or more"
      }],
      "is_yes_no": false,
      "group": "what"
    }, {
      "id": 122,
      "label": "Stinger",
      "states": [{
        "id": 123,
        "label": "Present"
      }, {
        "id": 124,
        "label": "Absent"
      }],
      "is_yes_no": false,
      "group": "what"
    }, {
      "id": 125,
      "label": "Body colour",
      "states": [{
        "id": 126,
        "label": "Red"
      }, {
        "id": 127,
        "label": "Yellow"
      }, {
        "id": 128,
        "label": "Black"
      }, {
        "id": 129,
        "label": "Brown"
      }, {
        "id": 130,
        "label": "Green"
      }, {
        "id": 131,
        "label": "Grey"
      }, {
        "id": 132,
        "label": "White"
      }, {
        "id": 133,
        "label": "Orange"
      }],
      "is_yes_no": false,
      "group": "what"
    }, {
      "id": 134,
      "label": "Stripes",
      "states": [{
        "id": 135,
        "label": "Present"
      }, {
        "id": 136,
        "label": "Absent"
      }],
      "is_yes_no": false,
      "group": "what"
    }, {
      "id": 259,
      "label": "Polka dots",
      "states": [{
        "id": 260,
        "label": "Yes"
      }, {
        "id": 261,
        "label": "No"
      }],
      "is_yes_no": true,
      "group": "what"
    }, {
      "id": 137,
      "label": "Wormlike",
      "states": [{
        "id": 138,
        "label": "Yes"
      }, {
        "id": 139,
        "label": "No"
      }],
      "is_yes_no": true,
      "group": "what"
    }, {
      "id": 140,
      "label": "Firmly attached",
      "states": [{
        "id": 141,
        "label": "Yes"
      }, {
        "id": 142,
        "label": "No"
      }],
      "is_yes_no": true,
      "group": "what"
    }, {
      "id": 143,
      "label": "Jump",
      "states": [{
        "id": 144,
        "label": "Yes"
      }, {
        "id": 145,
        "label": "No"
      }],
      "is_yes_no": true,
      "group": "what"
    }, {
      "id": 146,
      "label": "Beetle-like",
      "states": [{
        "id": 147,
        "label": "Yes"
      }, {
        "id": 148,
        "label": "No"
      }],
      "is_yes_no": true,
      "group": "what"
    }, {
      "id": 149,
      "label": "Size",
      "states": [{
        "id": 150,
        "label": "Tiny (pin-head or difficult to see)"
      }, {
        "id": 152,
        "label": "Small to medium (clearly visible, bigger than pin head)"
      }],
      "is_yes_no": false,
      "group": "what"
    }, {
      "id": 197,
      "label": "Spider-like",
      "states": [{
        "id": 198,
        "label": "Yes"
      }, {
        "id": 199,
        "label": "No"
      }],
      "is_yes_no": true,
      "group": "what"
    }, {
      "id": 200,
      "label": "Fly to or off you",
      "states": [{
        "id": 201,
        "label": "Yes"
      }, {
        "id": 202,
        "label": "No"
      }],
      "is_yes_no": true,
      "group": "what"
    }, {
      "id": 231,
      "label": "Head shape",
      "states": [{
        "id": 232,
        "label": "Rounded, separate from body, no obvious strawlike mouth"
      }, {
        "id": 233,
        "label": "Rounded, separate with long beak/straw like mouth"
      }, {
        "id": 234,
        "label": "Head looks fused with body"
      }],
      "is_yes_no": false,
      "group": "what"
    }, {
      "id": 235,
      "label": "Eyes",
      "states": [{
        "id": 236,
        "label": "Two either side of head, not overly large"
      }, {
        "id": 237,
        "label": "Very large bulbous eyes, cover most of head"
      }, {
        "id": 238,
        "label": "No visible eyes on head"
      }, {
        "id": 239,
        "label": "Many individual eyes on head"
      }],
      "is_yes_no": false,
      "group": "what"
    }, {
      "id": 240,
      "label": "Green fangs",
      "states": [{
        "id": 241,
        "label": "Yes"
      }, {
        "id": 242,
        "label": "No"
      }],
      "is_yes_no": true,
      "group": "what"
    }, {
      "id": 243,
      "label": "Glow under uv light",
      "states": [{
        "id": 244,
        "label": "Yes"
      }, {
        "id": 245,
        "label": "No"
      }],
      "is_yes_no": true,
      "group": "what"
    }, {
      "id": 247,
      "label": "Narrow waist, hinged to body",
      "states": [{
        "id": 248,
        "label": "Yes"
      }, {
        "id": 249,
        "label": "No"
      }],
      "is_yes_no": true,
      "group": "what"
    }],
    treatments: [{
      "id": 0,
      "short_title": "Ticks",
      "title": "Tick stuck in your skin",
      "image": {
        "file": "tick-stuck-in-your-skin-1.jpg",
        "credit": "By Dunpharlain - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=79169649"
      },
      "text": ["Ticks that remain in the skin can increase your risk of contracting tick related disease such as Lyme Disease so removing them as soon as possible is very important", "Firstly: try to avoid squeezing or pinching the tick as this can damage your skin", "Use a Tick removal tool, available from vets or pet shops, or fine tipped tweezers to grab the tick as close to the skin as is possible", "Once you have the tick gripped close to the skin pull upwards firmly and steadily", "Try to avoid crushing the tick", "Once the tick is removed clean the area. Soap and water should be used to clean the skin", "Over the counter anti-septic cream can be applied to the bite area to help prevent infection", "Tick removal tools will contain \u2018how to use\u2019 instructions. Please follow these carefully if using these tools"],
      "warning": "Do not burn, cut or pour liquid on a tick as this can damage your skin",
      "photos_by": ["By Dunpharlain - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=79169649"]
    }, {
      "id": 1,
      "short_title": "Emergency",
      "title": "Getting emergency treatment",
      "image": {
        "file": "emergency-2.jpg",
        "credit": "By hha124l (Chris Sampson) - https://www.flickr.com/photos/lodekka/4771842492/, CC BY 2.0,"
      },
      "text": ["Dial 999 immediately if you suffer a severe reaction or symptoms. These can include but are not limited to:", "Collapse, dizziness and feeling like you\u2019re about to collapse", "Breathing difficulties including wheezing and shortness of breath", "Face, lips, mouth, tongue and throat start to swell or become swollen", "The person bitten/stung becomes unconscious", "Severe chest pain and fast heart rate", "The person bitten/stung becomes confused or starts acting in an unusual way", "You feel severely unwell"],
      "warning": "If you become severely unwell or there is an emergency please call 999 immediately",
      "photos_by": ["By hha124l (Chris Sampson) - https://www.flickr.com/photos/lodekka/4771842492/, CC BY 2.0,"]
    }, {
      "id": 2,
      "short_title": "First aid",
      "title": "Sting and Bite First Aid",
      "image": {
        "file": "sting-and-bite-first-aid-2.jpg",
        "credit": "By Seney Natural History Association - mosquito bitesUploaded by AlbertHerring, CC BY-SA 2.0, https://commons.wikimedia.org/w/index.php?curid=29577798"
      },
      "text": ["Firstly, any caterpillar hairs, stingers or ticks left in the skin will need to be removed.", "For advice on doing this please see the treatment pages for each of these", "The area that has been bitten or stung should be cleaned with soap and water", "Cooling the affected skin can help with any skin swelling", "To do this apply an ice pack or a cloth wet with cold water to the area for 10 minutes", "To reduce arm or leg swelling try keeping the affected limb raised", "Scratching any bites or skin lesions that occur after bites is a cause of infection", "Avoiding scratching bites is therefore extremely important.", "Bites can also sometimes become blisters, leaving these intact can often help prevent skin infection", "Non-medical substances used as skin treatments like vinegar, talc on powder and alcohol should be avoided", "These substances are often much less help than over the counter options and can often make the skin worse"],
      "warning": "Symptoms of bites should have disappeared within a few days Symptoms can include itchiness, redness, swelling and discomfort",
      "photos_by": ["By Seney Natural History Association - mosquito bitesUploaded by AlbertHerring, CC BY-SA 2.0, https://commons.wikimedia.org/w/index.php?curid=29577798"]
    }, {
      "id": 3,
      "short_title": "Caterpillar hairs",
      "title": "Caterpillar hairs on your skin",
      "image": {
        "file": "caterpillar-hairs-on-your-skin-2.jpg",
        "credit": "By Kleuske - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=19940595"
      },
      "text": ["Avoid grasping or pinching any hairy caterpillars with your hands and fingers", "Using an object like a card, pen or tweezers to remove a caterpillar is preferred", "Wash the skin that touched a caterpillar, or it\u2019s hairs, with running water", "Once the skin has dried, sticky tape can be used to get rid of any remaining hairs", "All clothing worn at the time the caterpillar or hairs got onto your skin should be removed and washed at high temperatures as these can contain caterpillar hairs", "Pharmacy creams, lotions, and ice packs can all help with itchiness and burn that affects skin", "Avoid anti-histamine creams and toweling yourself dry after washing the hairs off", "Please discuss with your local pharmacist creams available to purchase", "Over the counter painkillers such as paracetamol can help with skin pain", "When using/taking any creams or medications, please read the manufacturers instructions carefully before using them. If you are unsure about any treatment please discuss with a medical professional", "If hairs get into your eyes they can cause severe damage so you should see an eye specialist", "Caterpillar hairs can cause breathing difficulties similar to asthma. If this occurs similar treatments will need to be started so please see a medical professional immediately"],
      "warning": "If the skin lesions do not resolve within a few days, you develop breathing difficulties, you become ill or you are concerned after being affected by caterpillar hairs please see a medical professional",
      "photos_by": ["By Kleuske - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=19940595"]
    }, {
      "id": 4,
      "short_title": "Stings",
      "title": "Sting stuck in your skin",
      "image": {
        "file": "sting-stuck-in-your-skin-2.jpg",
        "credit": "By Waugsberg - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=2667145"
      },
      "text": ["Stingers that remain in the skin can continue to release toxins and therefore should be removed as soon as possible", "Firstly: try to avoid squeezing or pinching the stinger as this may inject more toxin", "Stings can be made worse by using tweezers or your fingers for removal as these squeeze the stinger", "Use a hard edged object, such as cards or your fingernail, to scrape the stinger away from your skin"],
      "warning": "If the stinger is deep within the skin and is difficult to remove please see a medical professional",
      "photos_by": ["By Waugsberg - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=2667145"]
    }, {
      "id": 5,
      "short_title": "Getting help",
      "title": "When should you call for help?",
      "image": {
        "file": "when-should-you-call-for-help-2.jpg",
        "credit": "CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=1517111"
      },
      "text": ["You should always contact a medical professional or speak to the NHS 111 service if you are ever concerned about a bite, sting or problems occurring after being bitten or stung", "You should also see a medical professional if:", "You develop a skin infection. Symptoms of this may include worsening swelling, redness, pain, heat from the skin and pus from the bite/sting", "You become generally unwell. Symptoms of this may include fever, headache, diarrhea and vomiting, swollen lymph nodes and flu like symptoms", "You notice the skin lesion is worsening rather than improving after a few days", "Soft parts of your body have been affected like your eyes or throat", "A large area around the bite/sting or other parts of your body becomes affected. This can indicate an allergy or infection and so should be reviewed by a medical professional"],
      "warning": "If you become severely unwell see the emergency treatment page",
      "photos_by": ["CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=1517111"]
    }, {
      "id": 6,
      "short_title": "Symptoms",
      "title": "Help with symptoms",
      "image": {
        "file": "help-with-symptoms-2.jpg",
        "credit": "By Orrling and Tomer S - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=10227087"
      },
      "text": ["Pain", "There are many painkillers that can help with pain available from pharmacies, supermarkets and high street stores. These include paracetamol and Ibuprofen", "Please always take care to read and follow the manufacturers instructions before using any treatments or medications and see your doctor if you are unsure or are concerned", "Swelling", "Cooling the affected skin can help with any skin swelling", "To do this apply an ice pack or a cloth wet with cold water to the area for 10 minutes", "To reduce arm or leg swelling try keeping the affected limb raised", "Itchiness", "There are many anti-itching treatments such as soothing creams/ointments and anti-histamine tablets available at your local pharmacy", "Please talk to your pharmacist about the options available or visit their insect bite section for options and follow manufacturers instructions before usage"],
      "warning": "Please visit a medical professional if the above treatments fail to help Children under the age of 16 should not be given aspirin for pain",
      "photos_by": ["By Orrling and Tomer S - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=10227087"]
    }]
  },
  mutations: {},
  actions: {},
  getters: {
    getSpeciesByScientificName: state => scientificName => {
      return state.species.find(species => species.scientific_name === scientificName);
    },
    getCharactersStateCount: state => {
      return Object.fromEntries(state.characters.map(char => [char.id, char.states.length]));
    },
    getTreatments: state => {
      return state.treatments;
    },
    getTreatmentByID: state => id => {
      return state.treatments.find(treatment => treatment.id === id);
    }
  }
}));

/***/ })

},[["./app.js","runtime","vendor"]]]);