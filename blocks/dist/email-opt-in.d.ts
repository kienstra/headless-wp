import * as React from 'react';
interface Attributes {
    heading: string;
    'submission-message': string;
    'main-copy': string;
    'button-text': string;
}
interface EmailOptInProps {
    attrs: Attributes;
    attributes: Attributes;
}
/**
 * An example interactive block component.
 *
 * Feel free to rename this and replace it with your own.
 * The fields from Genesis Custom Blocks are in blockAttributes.
 */
declare function EmailOptIn(props: EmailOptInProps): React.ReactElement;
export default EmailOptIn;
