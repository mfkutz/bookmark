import { Accordion, AccordionItem } from "@nextui-org/react";
import './Questions.css'
import Button from "../Button/Button";

const Questions = () => {
    const content1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.";
    const content2 = "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet."
    const content3 = "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum."
    const content4 = "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit."

    return (

        <div className="container_questions">
            <div className="accordeon_container">
                <div className="accordeon">
                    <Accordion>
                        <AccordionItem key="1" aria-label="Accordion 1" title={<div className="question_accordeon">What is Bookmark?</div>}>
                            <div className="question_content">{content1}</div>
                        </AccordionItem>
                        <AccordionItem key="2" aria-label="Accordion 2" title={<div className="question_accordeon">How can I request a new browser?</div>}>
                            <div className="question_content">{content2}</div>
                        </AccordionItem>
                        <AccordionItem key="3" aria-label="Accordion 3" title={<div className="question_accordeon">Is there a mobile app?</div>}>
                            <div className="question_content">{content3}</div>
                        </AccordionItem>
                        <AccordionItem key="4" aria-label="Accordion 4" title={<div className="question_accordeon">What about other Chromium browsers?</div>}>
                            <div className="question_content">{content4}</div>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
            <div className="btn_container_questions">
                <Button />
            </div>
        </div>

    )
}

export default Questions