<?php
/**
 * Plugin Name:       Confirm Mode for Contact Form 7
 * Text Domain:       confirm-mode-for-contact-form-7
 * Plugin URI:
 * Description:       This is an add-on to introduce a confirmation mode into Contact Form 7.
 * Version:           1.0.0
 * Requires at least: 5.9
 * Requires PHP:      7.0
 * Author:            cmiz
 * Author URI:
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 */
if ( ! defined( 'ABSPATH' ) ) die;

require_once __DIR__ . '/inc/ConfirmModeForCF7.php';

ConfirmModeForCF7::get_instance();
