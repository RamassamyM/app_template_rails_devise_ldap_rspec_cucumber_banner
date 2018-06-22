// exemple for using :
// <%= select_tag "timezone", options_from_collection_for_select(
//       ActiveSupport::TimeZone.all.
//         map { |tz| tz.tzinfo }.
//         sort_by { |tzinfo| tzinfo.name },
//       :name, :name),
//       class: 'select2' %>

import $ from 'jquery';
import 'select2';

$('.select2').select2();

// Requiring CSS! Path is relative to ./node_modules
import 'select2/dist/css/select2.css';
