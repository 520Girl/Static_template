function Schedule_OnSelectAll(checkboxName,prefix){var isChecked=jQuery("#"+checkboxName).is(":checked");jQuery('input[type=checkbox][id^="'+prefix+'"]').prop("checked",isChecked);}
function Schedule_OnSelectPeriod(checkboxName,prefix){var isChecked=jQuery("#"+checkboxName).is(":checked");var selectAll=prefix.replace('_dlCategories','')+"_chkSelectAllLines";if(isChecked)
jQuery.each
(jQuery('input[type=checkbox][id^="'+prefix+'"]'),function(index,element){var checkbox=jQuery(element);if(checkbox.attr('id')!=checkboxName&&checkbox.attr('id')!=selectAll&&!checkbox.is(":checked"))
isChecked=false;});jQuery("#"+selectAll).prop("checked",isChecked);}