import { Accordion, AccordionItem } from "@nextui-org/react";
import './Questions.css'

const Questions = () => {
    const content1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.";
    const content2 = "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet."
    const content3 = "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum."
    const content4 = "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit."


    const contentStyle = {
        fontSize: '14px' // Ajusta aquí el tamaño de fuente deseado
    };



    return (
        <div className="accordeon_container">
            <div className="accordeon">
                <Accordion>
                    <AccordionItem key="1" aria-label="Accordion 1" title={<div className="">What is Bookmark?</div>}>
                        <div style={contentStyle}>{content1}</div>
                    </AccordionItem>
                    <AccordionItem key="2" aria-label="Accordion 2" title="How can I request a new browser?">
                        {content2}
                    </AccordionItem>
                    <AccordionItem key="3" aria-label="Accordion 3" title="Is there a mobile app?">
                        {content3}
                    </AccordionItem>
                    <AccordionItem key="4" aria-label="Accordion 4" title="What about other Chromium browsers?">
                        {content4}
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    )
}

export default Questions