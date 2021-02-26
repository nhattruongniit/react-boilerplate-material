class Validate {
  isValidParameterKey = (value: string): boolean => {
    const pattern = /^[a-z]([a-z0-9_-]+)*$/i;
    return pattern.test(value);
  };
}

const validate = new Validate();

export default validate;
