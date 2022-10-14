// bring CypherSheets class to use constants
import {CypherSheets} from "./cyphersheets-main.js";

// a class to set and get setting values
class SettingsForm {

    static getUseNumeneraSheets(){
        return game.settings.get(CypherSheets.ID, CypherSheets.SETTINGS.NUMENERA);
    }
    static setUseNumeneraSheets(value) {
        game.settings.set(CypherSheets.ID, CypherSheets.SETTINGS.NUMENERA, value);
    }

    static getUseClaimtheSkySheets(){
        return game.settings.get(CypherSheets.ID, CypherSheets.SETTINGS.CLAIMTHESKY);
    }
    static setUseClaimtheSkySheets(value) {
        game.settings.set(CypherSheets.ID, CypherSheets.SETTINGS.CLAIMTHESKY, value);
    }

    static getUseExpandedWorldsSheets(){
        return game.settings.get(CypherSheets.ID, CypherSheets.SETTINGS.EXPANDED);
    }
    static setUseExpandedWorldsSheets(value) {
        game.settings.set(CypherSheets.ID, CypherSheets.SETTINGS.EXPANDED, value);
    }

    static getUseTidalBladesSheets(){
        return game.settings.get(CypherSheets.ID, CypherSheets.SETTINGS.TIDALBLADES);
    }
    static setUseTidalBladesSheets(value) {
        game.settings.set(CypherSheets.ID, CypherSheets.SETTINGS.TIDALBLADES, value);
    }

    static getUseGenericThemesSheets(){
        return game.settings.get(CypherSheets.ID, CypherSheets.SETTINGS.GENERIC);
    }
    static setUseGenericThemesSheets(value) {
        game.settings.set(CypherSheets.ID, CypherSheets.SETTINGS.GENERIC, value);
    }

    static getUseGodforsakenSheets(){
        return game.settings.get(CypherSheets.ID, CypherSheets.SETTINGS.GODFORSAKEN);
    }
    static setUseGodforsakenSheets(value) {
        game.settings.set(CypherSheets.ID, CypherSheets.SETTINGS.GODFORSAKEN, value);
    }

    static getUseGodsoftheFallSheets(){
        return game.settings.get(CypherSheets.ID, CypherSheets.SETTINGS.GODSOFTHEFALL);
    }
    static setUseGodsoftheFallSheets(value) {
        game.settings.set(CypherSheets.ID, CypherSheets.SETTINGS.GODSOFTHEFALL, value);
    }

    static getUsePredationSheets(){
        return game.settings.get(CypherSheets.ID, CypherSheets.SETTINGS.PREDATION);
    }
    static setUsePredationSheets(value) {
        game.settings.set(CypherSheets.ID, CypherSheets.SETTINGS.PREDATION, value);
    }

    static getUsePtolusSheets(){
        return game.settings.get(CypherSheets.ID, CypherSheets.SETTINGS.PTOLUS);
    }
    static setUsePtolusSheets(value) {
        game.settings.set(CypherSheets.ID, CypherSheets.SETTINGS.PTOLUS, value);
    }

    static getUseStayAliveSheets(){
        return game.settings.get(CypherSheets.ID, CypherSheets.SETTINGS.STAYALIVE);
    }
    static setUseStayAliveSheets(value) {
        game.settings.set(CypherSheets.ID, CypherSheets.SETTINGS.STAYALIVE, value);
    }

    static getUseTheStarsAreFireSheets(){
        return game.settings.get(CypherSheets.ID, CypherSheets.SETTINGS.STARSAREFIRE);
    }
    static setUseTheStarsAreFireSheets(value) {
        game.settings.set(CypherSheets.ID, CypherSheets.SETTINGS.STARSAREFIRE, value);
    }

    static getUseTheStrangeSheets(){
        return game.settings.get(CypherSheets.ID, CypherSheets.SETTINGS.THESTRANGE);
    }
    static setUseTheStrangeSheets(value) {
        game.settings.set(CypherSheets.ID, CypherSheets.SETTINGS.THESTRANGE, value);
    }

    static getUseUnmaskedSheets(){
        return game.settings.get(CypherSheets.ID, CypherSheets.SETTINGS.UNMASKED);
    }
    static setUseUnmaskedSheets(value) {
        game.settings.set(CypherSheets.ID, CypherSheets.SETTINGS.UNMASKED, value);
    }

    static getUseWAAMHSheets(){
        return game.settings.get(CypherSheets.ID, CypherSheets.SETTINGS.WAAMH);
    }
    static setUseWAAMHSheets(value) {
        game.settings.set(CypherSheets.ID, CypherSheets.SETTINGS.WAAMH, value);
    }
};

// a form to select the custom sheets, in lieu of doing so in the settings

export class CypherSheetsConfigDialog extends FormApplication {
    static get defaultOptions() {
        const defaults = super.defaultOptions;

        const overrides = {
            width: 600,
            height: "auto",
            id: "cypher-sheets-config",
            template: "modules/cyphersheets/templates/config-dialog.html",
            title: "Cypher System Custom Sheets",
            userId: game.userId,
            closeOnSubmit: true
            // submitOnChange: true, // submit when any input changes
        };

        const mergedOptions = foundry.utils.mergeObject(defaults, overrides);

        return mergedOptions;
    };

    // form data 
    getData(options) {
        let data;
        if (this.reset) {
            data = {
                useNumeneraSheets: true,
                useClaimtheSkySheets: true,
                useExpandedWorldsSheets: true,
                getUseTidalBladesSheets: true,
                useGenericThemesSheets: true,
                useGodforsakenSheets: true,
                useGodsoftheFallSheets: true,
                usePredationSheets: true,
                usePtolusSheets: true,
                useStayAliveSheets: true,
                useTheStarsAreFireSheets: true,
                useTheStrangeSheets: true,
                useUnmaskedSheets: true,
                useWAAMHSheets: true
            };
        }
        else {
            data = {
                useNumeneraSheets: SettingsForm.getUseNumeneraSheets(),
                useClaimtheSkySheets: SettingsForm.getUseClaimtheSkySheets(),
                useExpandedWorldsSheets: SettingsForm.getUseExpandedWorldsSheets(),
                useTidalBladesSheets: SettingsForm.getUseTidalBladesSheets(),
                useGenericThemesSheets: SettingsForm.getUseGenericThemesSheets(),
                useGodforsakenSheets: SettingsForm.getUseGodforsakenSheets(),
                useGodsoftheFallSheets: SettingsForm.getUseGodsoftheFallSheets(),
                usePredationSheets: SettingsForm.getUsePredationSheets(),
                usePtolusSheets: SettingsForm.getUsePtolusSheets(),
                useStayAliveSheets: SettingsForm.getUseStayAliveSheets(),
                useTheStarsAreFireSheets: SettingsForm.getUseTheStarsAreFireSheets(),
                useTheStrangeSheets: SettingsForm.getUseTheStrangeSheets(),
                useUnmaskedSheets: SettingsForm.getUseUnmaskedSheets(),
                useWAAMHSheets: SettingsForm.getUseWAAMHSheets()
            };
        }
        return data
    };

    // resets values for custom sheet settings
    activateListeners(html) {
        super.activateListeners(html);
        html.find('button[name="reset"]').click(this.onReset.bind(this));
        this.reset = false;
        
        html.find('#mcg-accordion-card').click(function() {
            let mcgStatement = $('#mcg-accordion-card .card-body');
            $('#mcg-accordion-card .card-title .fas').toggleClass("arrow-down");

            if(mcgStatement.css('display') == 'block') {
                mcgStatement.slideUp();
            } else {
                $('.card-body').slideUp();
                mcgStatement.slideDown();
            }
        });
    };

    onReset() {
        this.reset = true;
        this.render();
    };

    // activateListeners(html) {
    //     super.activateListeners(html);
        
    // };

    // gets data from HTML form
    async _updateObject(event, formData) {

        SettingsForm.setUseNumeneraSheets(formData.useNumeneraSheets);
        SettingsForm.setUseClaimtheSkySheets(formData.useClaimtheSkySheets);
        SettingsForm.setUseExpandedWorldsSheets(formData.useExpandedWorldsSheets);
        SettingsForm.setUseTidalBladesSheets(formData.useTidalBladesSheets);
        SettingsForm.setUseGenericThemesSheets(formData.useGenericThemesSheets);
        SettingsForm.setUseGodforsakenSheets(formData.useGodforsakenSheets);
        SettingsForm.setUseGodsoftheFallSheets(formData.useGodsoftheFallSheets);
        SettingsForm.setUsePredationSheets(formData.usePredationSheets);
        SettingsForm.setUsePtolusSheets(formData.usePtolusSheets);
        SettingsForm.setUseStayAliveSheets(formData.useStayAliveSheets);
        SettingsForm.setUseTheStarsAreFireSheets(formData.useTheStarsAreFireSheets);
        SettingsForm.setUseTheStrangeSheets(formData.useTheStrangeSheets);
        SettingsForm.setUseUnmaskedSheets(formData.useUnmaskedSheets);
        SettingsForm.setUseWAAMHSheets(formData.useWAAMHSheets);
    };
};
