import * as React from 'react';
interface Attributes {
    'new-field': string;
}
interface ExampleProps {
    attrs: Attributes;
    attributes: Attributes;
}
/**
 * An example block component.
 *
 * Feel free to rename this and replace it with your own.
 * The fields from Genesis Custom Blocks are in blockAttributes.
 * For example, if you added a field with the name (slug) of 'example-field',
 * it will be in blockAttributes['example-field].
 */
declare function Example(props: ExampleProps): React.ReactElement;
export default Example;
