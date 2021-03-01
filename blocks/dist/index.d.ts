import Example from './example';
import EmailOptIn from './email-opt-in';
declare const blockComponents: {
    [x: string]: typeof Example | typeof EmailOptIn;
};
export default blockComponents;
