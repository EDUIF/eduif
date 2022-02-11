const validatorList = list => value => list.includes(value);

export const sizeValidator = validatorList(['large' | 'normal' | 'small']);

export const typeValidator = validatorList(['primary', 'success', 'warning', 'danger', 'info']);

export const buttonTypeValidator = validatorList(['primary', 'success', 'warning', 'danger', 'info', 'text']);
