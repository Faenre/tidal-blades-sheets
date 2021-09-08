import {CypherSheets} from "./cyphersheets-main.js";

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

export class CypherSheetsConfigDialog extends FormApplication {
    static get defaultOptions() {
        const defaults = super.defaultOptions;

        const overrides = {
            width: 500,
            height: "auto",
            id: "cypher-sheets-config",
            template: "modules/cyphersheets/templates/cypher-sheets-config.html",
            title: "Cypher System Custom Sheets",
            userId: game.userId,
            closeOnSubmit: true
            // submitOnChange: true, // submit when any input changes
        };

        const mergedOptions = foundry.utils.mergeObject(defaults, overrides);

        return mergedOptions;
    }

    getData(options) {
        let data;
        if (this.reset) {
            data = {
                useNumeneraSheets: true,
                useClaimtheSkySheets: true,
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
    }

    activateListeners(html) {
        super.activateListeners(html);
        html.find('button[name="reset"]').click(this.onReset.bind(this));
        this.reset = false;
    }

    onReset() {
        this.reset = true;
        this.render();
    }

    async _updateObject(event, formData) {

        SettingsForm.setUseNumeneraSheets(formData.useNumeneraSheets);
        SettingsForm.setUseClaimtheSkySheets(formData.useClaimtheSkySheets);
        SettingsForm.setUseGodforsakenSheets(formData.useGodforsakenSheets);
        SettingsForm.setUseGodsoftheFallSheets(formData.useGodsoftheFallSheets);
        SettingsForm.setUsePredationSheets(formData.usePredationSheets);
        SettingsForm.setUsePtolusSheets(formData.usePtolusSheets);
        SettingsForm.setUseStayAliveSheets(formData.useStayAliveSheets);
        SettingsForm.setUseTheStarsAreFireSheets(formData.useTheStarsAreFireSheets);
        SettingsForm.setUseTheStrangeSheets(formData.useTheStrangeSheets);
        SettingsForm.setUseUnmaskedSheets(formData.useUnmaskedSheets);
        SettingsForm.setUseWAAMHSheets(formData.useWAAMHSheets);
    }
};