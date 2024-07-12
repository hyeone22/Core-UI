import { CAccordion } from "@coreui/react";
import { CAccordionBody } from "@coreui/react";
import { CAccordionHeader } from "@coreui/react";
import { CAccordionItem } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";

function Accordion() {
  return (
    <>
      <CAccordion className="pb-3" activeItemKey={2}>
        <CAccordionItem itemKey={1}>
          <CAccordionHeader>예시입니다</CAccordionHeader>
          <CAccordionBody>
            <strong>This is the first item accordion body.</strong> It is hidden
            by default, until the collapse plugin adds the appropriate classes
            that we use to style each element. These classes control the overall
            appearance, as well as the showing and hiding via CSS transitions.
            You can modify any of this with custom CSS or overriding our default
            variables. It also worth noting that just about any HTML can go
            within the <code>.accordion-body</code>, though the transition does
            limit overflow.
          </CAccordionBody>
        </CAccordionItem>
        <CAccordionItem itemKey={2}>
          <CAccordionHeader>예시 2</CAccordionHeader>
          <CAccordionBody>
            <strong>This is the second item accordion body.</strong> It is
            hidden by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the
            overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or
            overriding our default variables. It also worth noting that just
            about any HTML can go within the <code>.accordion-body</code>,
            though the transition does limit overflow.
          </CAccordionBody>
        </CAccordionItem>
        <CAccordionItem itemKey={3}>
          <CAccordionHeader>예시 3</CAccordionHeader>
          <CAccordionBody>
            <strong>This is the second item accordion body.</strong> It is
            hidden by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the
            overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or
            overriding our default variables. It also worth noting that just
            about any HTML can go within the <code>.accordion-body</code>,
            though the transition does limit overflow.
          </CAccordionBody>
        </CAccordionItem>
      </CAccordion>
    </>
  );
}

export default Accordion;
