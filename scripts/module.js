import {
  MODULE_NAME,
  MODULE_ID,
  OPT_CHAT_MSG,
  OPT_AUTO_D20,
  OPT_AUTO_D20_MSG,
  OPT_AUTO_D20_MSG_NO_SURGE,
  OPT_ENABLE_TOC,
  OPT_TOC_RECHARGE_MSG,
  OPT_ROLLTABLE_ENABLE,
  OPT_ROLLTABLE_NAME,
  OPT_WHISPER_GM,
  OPT_CUSTOM_ROLL_DICE_FORMULA,
  OPT_CUSTOM_ROLL_RESULT,
  OPT_CUSTOM_ROLL_RESULT_CHECK,
  ROLL_COMPARISON,
  OPT_TSL_DIE,
  OPT_TSL_LVL1,
  OPT_TSL_LVL2,
  OPT_TSL_LVL3,
  OPT_TSL_LVL4,
  OPT_TSL_LVL5,
  OPT_TSL_LVL6,
  OPT_TSL_LVL7,
  OPT_TSL_LVL8,
  OPT_TSL_LVL9,
  OPT_TSL_LVL10,
  SURGE_TYPE,
  OPT_SURGE_TYPE,
} from "./Settings.js";
import MagicSurgeCheck from "./MagicSurgeCheck.js";

Hooks.on("init", function () {
  console.log(`Loading ${MODULE_NAME}`);

  game.settings.register(`${MODULE_ID}`, `${OPT_SURGE_TYPE}`, {
    name: game.i18n.format("WildMagicSurge5E.opt_surge_type_name"),
    hint: game.i18n.format("WildMagicSurge5E.opt_surge_type_hint"),
    scope: "world",
    config: true,
    choices: SURGE_TYPE,
    default: "Default",
    type: String,
  });

  game.settings.register(`${MODULE_ID}`, `${OPT_WHISPER_GM}`, {
    name: game.i18n.format("WildMagicSurge5E.opt_whisper_gm_name"),
    hint: game.i18n.format("WildMagicSurge5E.opt_whisper_gm_hint"),
    scope: "world",
    config: true,
    default: false,
    type: Boolean,
  });

  game.settings.register(`${MODULE_ID}`, `${OPT_CHAT_MSG}`, {
    name: game.i18n.format("WildMagicSurge5E.opt_chat_msg_name"),
    hint: game.i18n.format("WildMagicSurge5E.opt_chat_msg_hint"),
    scope: "world",
    config: true,
    default: "Wild Magic Check - Roll a D20",
    type: String,
  });

  game.settings.register(`${MODULE_ID}`, `${OPT_AUTO_D20}`, {
    name: game.i18n.format("WildMagicSurge5E.opt_auto_d20_name"),
    hint: game.i18n.format("WildMagicSurge5E.opt_auto_d20_hint"),
    scope: "world",
    config: true,
    default: false,
    type: Boolean,
  });

  game.settings.register(`${MODULE_ID}`, `${OPT_AUTO_D20_MSG}`, {
    name: game.i18n.format("WildMagicSurge5E.opt_auto_d20_msg_name"),
    hint: game.i18n.format("WildMagicSurge5E.opt_auto_d20_msg_hint"),
    scope: "world",
    config: true,
    default: "Wild Magic Surge! Roll a D100!",
    type: String,
  });

  game.settings.register(`${MODULE_ID}`, `${OPT_AUTO_D20_MSG_NO_SURGE}`, {
    name: game.i18n.format("WildMagicSurge5E.opt_auto_d20_msg_no_surge_name"),
    hint: game.i18n.format("WildMagicSurge5E.opt_auto_d20_msg_no_surge_hint"),
    scope: "world",
    config: true,
    default: "No wild magic surge",
    type: String,
  });

  game.settings.register(`${MODULE_ID}`, `${OPT_ENABLE_TOC}`, {
    name: game.i18n.format("WildMagicSurge5E.opt_enable_toc_name"),
    hint: game.i18n.format("WildMagicSurge5E.opt_enable_toc_hint"),
    scope: "world",
    config: true,
    default: false,
    type: Boolean,
  });

  game.settings.register(`${MODULE_ID}`, `${OPT_TOC_RECHARGE_MSG}`, {
    name: game.i18n.format("WildMagicSurge5E.opt_enable_toc_recharge_msg_name"),
    hint: game.i18n.format("WildMagicSurge5E.opt_enable_toc_recharge_msg_hint"),
    scope: "world",
    config: true,
    default: "Tides of Chaos Recharged",
    type: String,
  });

  game.settings.register(`${MODULE_ID}`, `${OPT_ROLLTABLE_ENABLE}`, {
    name: game.i18n.format("WildMagicSurge5E.opt_rolltable_enabled_name"),
    hint: game.i18n.format("WildMagicSurge5E.opt_rolltable_enabled_hint"),
    scope: "world",
    config: true,
    default: false,
    type: Boolean,
  });

  game.settings.register(`${MODULE_ID}`, `${OPT_ROLLTABLE_NAME}`, {
    name: game.i18n.format("WildMagicSurge5E.opt_rolltable_name_name"),
    hint: game.i18n.format("WildMagicSurge5E.opt_rolltable_name_hint"),
    scope: "world",
    config: true,
    default: "Wild Magic Surge 5e (PHB)",
    type: String,
  });

  game.settings.register(`${MODULE_ID}`, `${OPT_CUSTOM_ROLL_DICE_FORMULA}`, {
    name: game.i18n.format(
      "WildMagicSurge5E.opt_custom_roll_dice_formula_name"
    ),
    hint: game.i18n.format(
      "WildMagicSurge5E.opt_custom_roll_dice_formula_hint"
    ),
    scope: "world",
    config: true,
    default: "1d20",
    type: String,
  });

  game.settings.register(`${MODULE_ID}`, `${OPT_CUSTOM_ROLL_RESULT_CHECK}`, {
    name: game.i18n.format(
      "WildMagicSurge5E.opt_custom_roll_result_check_name"
    ),
    hint: game.i18n.format(
      "WildMagicSurge5E.opt_custom_roll_result_check_hint"
    ),
    scope: "world",
    config: true,
    choices: ROLL_COMPARISON,
    default: "EQ",
    type: String,
  });

  game.settings.register(`${MODULE_ID}`, `${OPT_CUSTOM_ROLL_RESULT}`, {
    name: game.i18n.format("WildMagicSurge5E.opt_custom_roll_result_name"),
    hint: game.i18n.format("WildMagicSurge5E.opt_custom_roll_result_hint"),
    scope: "world",
    config: true,
    default: "1",
    type: String,
  });

  game.settings.register(`${MODULE_ID}`, `${OPT_TSL_DIE}`, {
    name: game.i18n.format("WildMagicSurge5E.opt_tsl_die_name"),
    hint: game.i18n.format("WildMagicSurge5E.opt_tsl_die_hint"),
    scope: "world",
    config: true,
    default: "1d20",
    type: String,
  });

  game.settings.register(`${MODULE_ID}`, `${OPT_TSL_LVL1}`, {
    name: game.i18n.format("WildMagicSurge5E.opt_tsl_lvl1_name"),
    hint: game.i18n.format("WildMagicSurge5E.opt_tsl_lvl1_hint"),
    scope: "world",
    config: true,
    default: "= 1",
    type: String,
  });

  game.settings.register(`${MODULE_ID}`, `${OPT_TSL_LVL2}`, {
    name: game.i18n.format("WildMagicSurge5E.opt_tsl_lvl2_name"),
    scope: "world",
    config: true,
    default: "= 1",
    type: String,
  });

  game.settings.register(`${MODULE_ID}`, `${OPT_TSL_LVL3}`, {
    name: game.i18n.format("WildMagicSurge5E.opt_tsl_lvl3_name"),
    scope: "world",
    config: true,
    default: "= 1",
    type: String,
  });

  game.settings.register(`${MODULE_ID}`, `${OPT_TSL_LVL4}`, {
    name: game.i18n.format("WildMagicSurge5E.opt_tsl_lvl4_name"),
    scope: "world",
    config: true,
    default: "= 1",
    type: String,
  });

  game.settings.register(`${MODULE_ID}`, `${OPT_TSL_LVL5}`, {
    name: game.i18n.format("WildMagicSurge5E.opt_tsl_lvl5_name"),
    scope: "world",
    config: true,
    default: "= 1",
    type: String,
  });

  game.settings.register(`${MODULE_ID}`, `${OPT_TSL_LVL6}`, {
    name: game.i18n.format("WildMagicSurge5E.opt_tsl_lvl6_name"),
    scope: "world",
    config: true,
    default: "= 1",
    type: String,
  });

  game.settings.register(`${MODULE_ID}`, `${OPT_TSL_LVL7}`, {
    name: game.i18n.format("WildMagicSurge5E.opt_tsl_lvl7_name"),
    scope: "world",
    config: true,
    default: "= 1",
    type: String,
  });

  game.settings.register(`${MODULE_ID}`, `${OPT_TSL_LVL8}`, {
    name: game.i18n.format("WildMagicSurge5E.opt_tsl_lvl8_name"),
    scope: "world",
    config: true,
    default: "= 1",
    type: String,
  });

  game.settings.register(`${MODULE_ID}`, `${OPT_TSL_LVL9}`, {
    name: game.i18n.format("WildMagicSurge5E.opt_tsl_lvl9_name"),
    scope: "world",
    config: true,
    default: "= 1",
    type: String,
  });

  game.settings.register(`${MODULE_ID}`, `${OPT_TSL_LVL10}`, {
    name: game.i18n.format("WildMagicSurge5E.opt_tsl_lvl10_name"),
    scope: "world",
    config: true,
    default: "= 1",
    type: String,
  });
});

Hooks.on("ready", function () {
  window.MagicSurgeCheck = new MagicSurgeCheck();
  console.log(`Successfully loaded ${MODULE_NAME}`);
});

Hooks.on("createChatMessage", (chatMessage) => {
  window.MagicSurgeCheck.Check(chatMessage);
});
