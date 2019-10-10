export abstract class Constants {
     static readonly ALPHA_NUMERIC_PATTERN = '^[a-zA-Z0-9]*$';
     static readonly NAME_PATTERN = '^[a-zA-Z]*$';
     static readonly AGE_PATTERN = '^^[0-9]*$';
     static readonly REQUIRED_ERROR_MSG = 'You must enter a value';
     static readonly ALPHA_NUMERIC_ERROR_MSG = 'It must contains alphabets or numerics';
     static readonly NAME_ERROR_MSG = 'It must contains only alphabets';
     static readonly BLANK_STRING = '';
     static readonly ERROR_TYPE_REQUIRED = 'required';
     static readonly ERROR_TYPE_PATTERN = 'pattern';
}
