import TestGroup from '../testingFixtures/testGroup';
import { LoopTest } from '../testingFixtures/loopTest';

import * as whisperTests from '../tests/whisper';

export const whisperTestGroup = (): TestGroup =>
  new TestGroup('Whisper Aptitude', [
    new LoopTest(
      'Whisper Aptitude - Flex property whisper',
      whisperTests.testFlex,
      20000,
      'Click the right button',
    ),
    new LoopTest(
      'Whisper Aptitude - Flex property whisper',
      whisperTests.testFlexProperties,
      20000,
      'Click the right button',
    ),
    new LoopTest(
      'Whisper Aptitude - Markdown whisper',
      whisperTests.testMarkdownWhisper,
      20000,
      'Did markdown rendered properly?',
    ),
    new LoopTest(
      'Whisper Aptitude - Markdown with Link callback',
      whisperTests.testMarkdownOnLinkClick,
      20000,
      'All links callbacks should be received.',
    ),
    new LoopTest(
      'Whisper Aptitude - Internal Links',
      whisperTests.testClickableWhisper,
      10000,
      'Click the 5th option',
    ),
    new LoopTest(
      'Whisper Aptitude - Box in the box',
      whisperTests.testBoxInBox,
      10000,
      'Verify that box in the box rendered correctly',
    ),
    new LoopTest(
      'Whisper Aptitude - AlignItem in Box',
      whisperTests.testAlignItems,
      10000,
      'Verify that contents of the box are aligned correctly',
    ),
    new LoopTest(
      'Whisper Aptitude - External Links',
      whisperTests.testClickableLink,
      10000,
      'Click the link in the whisper',
    ),
    new LoopTest(
      'Whisper Aptitude - Network and List Items',
      whisperTests.testNetworkAndListComponents,
      5000,
      'No action required',
    ),
    new LoopTest(
      'Whisper Aptitude - Clickable Boxes',
      whisperTests.testClickableBox,
      10000,
      'Click the correct box',
    ),
    new LoopTest(
      'Whisper Aptitude - Nested Clickable Boxes',
      whisperTests.testClickableBoxNestingBoxes,
      10000,
      'Click the correct text',
    ),
    new LoopTest(
      'Whisper Aptitude - Nested Clickable Buttons',
      whisperTests.testClickableBoxNestingButtons,
      10000,
      'Click the button',
    ),
    new LoopTest(
      'Whisper Aptitude - Nested Clickable Links',
      whisperTests.testClickableBoxNestingLinks,
      10000,
      'Click the link',
    ),
    new LoopTest(
      'Whisper Aptitude - Button Whisper',
      whisperTests.testClickableButton,
      10000,
      'Click the 3rd button',
    ),
    new LoopTest(
      'Whisper Aptitude - ListPair Copyable Value',
      whisperTests.testListPairWithCopyableValue,
      6000,
      'Click the ListPair value to copy its text within alloted time',
    ),
    new LoopTest(
      'Whisper Aptitude - ListPair Copyable Label',
      whisperTests.testListPairWithCopyableLabel,
      6000,
      'Click the ListPair label to copy its text within alloted time',
    ),
    new LoopTest(
      'Whisper Aptitude - Copyable Markdown Value',
      whisperTests.testMarkdownWithCopyableBody,
      6000,
      'Click the Markdown value to copy its text within alloted time',
    ),
    new LoopTest(
      'Whisper Aptitude - Copyable Message Body',
      whisperTests.testMessageWithCopyableBody,
      6000,
      'Click the Message value to copy its text within alloted time',
    ),
    new LoopTest(
      'Whisper Aptitude - Copyable Message Header',
      whisperTests.testMessageWithCopyableHeader,
      6000,
      'Click the Message Header to copy its text within alloted time',
    ),
    new LoopTest(
      'Whisper Aptitude - Message',
      whisperTests.testMessage,
      30000,
      'Did components render properly',
    ),
    new LoopTest(
      'Whisper Aptitude - Test onCopy',
      whisperTests.testOnCopy,
      20000,
      `Test onCopy for Markdow,  ListPair, and Message. Copy one of each.`,
    ),
    new LoopTest(
      'Whisper Aptitude - Simple Form Whisper',
      whisperTests.testFormComponents,
      10000,
      `Enter 'Stonks' into the field`,
    ),
    new LoopTest(
      'Whisper Aptitude - Number Inputs',
      whisperTests.testNumberInputs,
      10000,
      `No action required`,
    ),
    new LoopTest(
      'Whisper Aptitude - Components with no labels',
      whisperTests.testNoLabels,
      10000,
      `Did components render properly`,
    ),
    new LoopTest(
      'Whisper Aptitude - Float Number Inputs',
      whisperTests.testFloatNumberInputs,
      20000,
      `Enter 0.6 in the input field`,
    ),
    new LoopTest(
      'Whisper Aptitude - Initial Value for Select and Radio',
      whisperTests.testDefaultValueForSelectAndRadio,
      10000,
      `No action required`,
    ),
    new LoopTest(
      'Whisper Aptitude - Tooltip Test',
      whisperTests.testTooltips,
      30000,
      `Hover on each component to see a tooltip`,
    ),
    new LoopTest(
      'Whisper Aptitude - onBlur/onFocus test',
      whisperTests.testOnBlurAndOnFocus,
      10000,
      `Focus on each field and exit out`,
    ),
    new LoopTest(
      'Whisper Aptitude - CollapseBox OnClick',
      whisperTests.testCollapseBoxOnClick,
      10000,
      'Click both CollapseBoxes',
    ),
    new LoopTest(
      'Whisper Aptitude - SectionTitle',
      whisperTests.testSectionTitle,
      10000,
      'Did SectionTitle render properly?',
    ),
    new LoopTest(
      'Whisper Aptitude - DateTime',
      whisperTests.testDateTime,
      20000,
      'Pick new date and time values',
    ),
    new LoopTest(
      'Whisper Aptitude - Icon Rendering',
      whisperTests.testIconLayout,
      10000,
      'Did the icon render correctly?',
    ),
    new LoopTest(
      'Whisper Aptitude - RichTextEditor',
      whisperTests.testRichTextEditor,
      30000,
      'Is RichTextEditor working correctly?',
    ),
    new LoopTest(
      'Whisper Aptitude - Autocomplete',
      whisperTests.testAutocomplete,
      30000,
      'Test the autocomplete',
    ),
    new LoopTest(
      'Whisper Aptitude - Padding',
      whisperTests.testPadding,
      10000,
      'Do the items have padding?',
    ),
    new LoopTest(
      'Whisper Aptitude - Margin',
      whisperTests.testMargin,
      10000,
      'Do the items have margins?',
    ),
    new LoopTest(
      'Whisper Aptitude - Width',
      whisperTests.testWidth,
      10000,
      'Do the items have different widths than default?',
    ),
    new LoopTest('Whisper Aptitude - Dropzone', whisperTests.testDropzone, 30000, 'Select files'),
    new LoopTest(
      'Whisper Aptitude - Scrolling',
      whisperTests.testScrollInsideBox,
      10000,
      'Does it scroll?',
    ),
    new LoopTest(
      'Whisper Aptitude - Message, Pair, Markdown layout',
      whisperTests.testMissingLayouts,
      10000,
      `Do the different component's have appropriate layout properties?`,
    ),
    new LoopTest(
      'Whisper Aptitude - JustifyContent',
      whisperTests.testJustifyContent,
      10000,
      'Does the JustifyContent-Normal items behave as "stretch" in flex container?',
    ),
    new LoopTest(
      'Whisper Aptitude - Progress',
      whisperTests.testProgressIndicator,
      10000,
      'Does the Progress Indicator display with percentage?',
    ),
    new LoopTest(
      'Whisper Aptitude - Indefinite Progress',
      whisperTests.testProgressIndicatorIndefinite,
      10000,
      'Does the Progress display indefinite animation? ',
    ),
    new LoopTest(
      'Whisper Aptitude - Breadcrumbs Empty',
      whisperTests.testEmptyBreadcrumbs,
      10000,
      'Are the breadcrumbs empty?',
    ),
    new LoopTest(
      'Whisper Aptitude - Breadcrumbs Simple',
      whisperTests.testSimpleBreadcrumbs,
      10000,
      'Do you see three breadcrumbs?',
    ),
    new LoopTest(
      'Whisper Aptitude - Breadcrumbs Many',
      whisperTests.testManyBreadcrumbs,
      10000,
      "Are there 10 breadcrumbs with the majority collapsed in '...'?",
    ),
    new LoopTest(
      'Whisper Aptitude - Breadcrumbs Many Clickable',
      whisperTests.testManyClickBreadcrumbs,
      10000,
      "Click 'Breadcrumb 5'.",
    ),
    new LoopTest(
      'Whisper Aptitude - Breadcrumbs Simple Clickable',
      whisperTests.testSimpleClickBreadcrumbs,
      10000,
      "Click 'Breadcrumb 3'.",
    ),
    new LoopTest(
      'Whisper Aptitude - CollapseBox openDirection',
      whisperTests.testCollapseBoxOpenDirection,
      10000,
      'Do the CollapseBoxes open in the correct directions?',
    ),
  ]);
