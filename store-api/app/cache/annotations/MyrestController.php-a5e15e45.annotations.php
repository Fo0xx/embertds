<?php

return array(
  '#namespace' => 'controllers',
  '#uses' => array (
  'RestServer' => 'Ubiquity\\controllers\\rest\\RestServer',
),
  '#traitMethodOverrides' => array (
  'controllers\\MyRestController' => 
  array (
  ),
),
);

