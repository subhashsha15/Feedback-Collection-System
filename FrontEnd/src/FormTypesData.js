import TeacherImg from "/teacher-imgcard.jpg";
import WebsiteImg from "/website-imgcard.jpg";
import EmployeeImg from "/employee-imgcard.jpg";
import CourseImg from "/course-imgcard.jpg";
import EventImg from "/event-imgcard.jpg";

import EventFormImg from "/form-image1.png";
import CourseFormImg from "/form-image2.png";
import EmployeeFormImg from "/form-image3.png";
import WebsiteFormImg from "/form-image4.png";
import TeacherFormImg from "/form-image5.png";

export const FormData = [
    {
        formId: 1,
        formCardImg: EventImg,
        formImg: EventFormImg,
        formTitle: "Event FeedBack Form",
        formDescription: "Thank you for attending Tech Innovators Summit 2024, a premier event showcasing the latest advancements and trends in technology.",
        formFields: [
            {
                "type": "text",
                "label": "First Name",
                "name": "firstName",
                "placeholder": "Enter your first name",
                "required": true
            },
            {
                "type": "text",
                "label": "Last Name",
                "name": "lastName",
                "placeholder": "Enter your last name",
                "required": true
            },
            {
                "type": "email",
                "label": "Email",
                "name": "email",
                "placeholder": "Enter your email",
                "required": true
            },
            {
                "type": "number",
                "label": "Age",
                "name": "age",
                "placeholder": "Enter your age",
                "required": true
            },
            {
                "type": "radio",
                "label": "Gender",
                "name": "gender",
                "options": ["Male", "Female", "Other"]
            },
            {
                "type": "text",
                "label": "Country",
                "name": "country",
                "placeholder": "Your Country",
                "required": true
            },
            {
                "type": "text",
                "label": "State",
                "name": "state",
                "placeholder": "Your State",
                "required": true
            },
            {
                "type": "rating",
                "name": "overallExperience0",
                "label": "How would you rate your overall experience at the Tech Innovators Summit 2024?"
            },
            {
                "type": "rating",
                "name": "overallExperience1",
                "label": "How satisfied are you with the content of the sessions you attended?"
            },
            {
                "type": "rating",
                "name": "overallExperience2",
                "label": "How would you rate the quality of the speakers at the event?"
            },
            {
                "type": "textarea",
                "name":"suggestions",
                "label": "What suggestions do you have for improving future events?",
                "placeholder": "Enter your comments here"
            },
        ]
    },
    {
        formId: 2,
        formCardImg: CourseImg,
        formImg: CourseFormImg,
        formTitle: "Course FeedBack Form",
        formDescription: "Thank you for participating in our Advanced Web Development course.Your feedback helps us enhance the learning experience for future participants.",
        formFields: [
            {
                "type": "text",
                "label": "First Name",
                "name": "firstName",
                "placeholder": "Enter your first name",
                "required": true
            },
            {
                "type": "text",
                "label": "Last Name",
                "name": "lastName",
                "placeholder": "Enter your last name",
                "required": true
            },
            {
                "type": "email",
                "label": "Email",
                "name": "email",
                "placeholder": "Enter your email",
                "required": true
            },
            {
                "type": "number",
                "label": "Age",
                "name": "age",
                "placeholder": "Enter your age",
                "required": true
            },
            {
                "type": "radio",
                "label": "Gender",
                "name": "gender",
                "options": ["Male", "Female", "Other"]
            },
            {
                "type": "text",
                "label": "Country",
                "name": "country",
                "placeholder": "Your Country",
                "required": true
            },
            {
                "type": "text",
                "label": "State",
                "name": "state",
                "placeholder": "Your State",
                "required": true
            },
            {
                "type": "rating",
                "name": "overallExperience0",
                "label": "How would you rate your overall experience of the course 'The Advanced Web Development'?"
            },
            {
                "type": "rating",
                "name": "overallExperience1",
                "label": "How would you rate the effectiveness of the course instructor?"
            },
            {
                "type": "rating",
                "name": "overallExperience2",
                "label": "How helpful were the provided learning resources (e.g., textbooks, online materials)?"
            },
            {
                "type": "textarea",
                "name":"suggestions",
                "label": "What suggestions do you have for improving this course?",
                "placeholder": "Enter your comments here"
            },
        ]
    },
    {
        formId: 3,
        formCardImg: EmployeeImg,
        formImg: EmployeeFormImg,
        formTitle: "Employee FeedBack Form",
        formDescription: "We value your insights on your workplace experience; please provide feedback to help us improve our company environment and processes.",
        formFields: [
            {
                "type": "text",
                "label": "First Name",
                "name": "firstName",
                "placeholder": "Enter your first name",
                "required": true
            },
            {
                "type": "text",
                "label": "Last Name",
                "name": "lastName",
                "placeholder": "Enter your last name",
                "required": true
            },
            {
                "type": "email",
                "label": "Email",
                "name": "email",
                "placeholder": "Enter your email",
                "required": true
            },
            {
                "type": "number",
                "label": "Age",
                "name": "age",
                "placeholder": "Enter your age",
                "required": true
            },
            {
                "type": "radio",
                "label": "Gender",
                "name": "gender",
                "options": ["Male", "Female", "Other"]
            },
            {
                "type": "text",
                "label": "Country",
                "name": "country",
                "placeholder": "Your Country",
                "required": true
            },
            {
                "type": "text",
                "label": "State",
                "name": "state",
                "placeholder": "Your State",
                "required": true
            },
            {
                "type": "rating",
                "name": "overallExperience0",
                "label": "How satisfied are you with your current job role and responsibilities?"
            },
            {
                "type": "rating",
                "name": "overallExperience1",
                "label": "How would you rate the overall work environment in the company?"
            },
            {
                "type": "rating",
                "name": "overallExperience2",
                "label": "How supportive is the management in helping you achieve your goals?"
            },
            {
                "type": "rating",
                "name": "overallExperience3",
                "label": "How would you rate the opportunities for professional growth and development in the company?"
            },
            {
                "type": "textarea",
                "name":"suggestions",
                "label": "What suggestions do you have for improving the workplace environment and processes?",
                "placeholder": "Enter your comments here"
            },
        ]
    },
    {
        formId: 4,
        formCardImg: WebsiteImg,
        formImg: WebsiteFormImg,
        formTitle: "Website FeedBack Form",
        formDescription: "Thank you for visiting our site; your feedback is crucial in helping us improve our website's functionality and user experience.",
        formFields: [
            {
                "type": "text",
                "label": "First Name",
                "name": "firstName",
                "placeholder": "Enter your first name",
                "required": true
            },
            {
                "type": "text",
                "label": "Last Name",
                "name": "lastName",
                "placeholder": "Enter your last name",
                "required": true
            },
            {
                "type": "email",
                "label": "Email",
                "name": "email",
                "placeholder": "Enter your email",
                "required": true
            },
            {
                "type": "number",
                "label": "Age",
                "name": "age",
                "placeholder": "Enter your age",
                "required": true
            },
            {
                "type": "radio",
                "label": "Gender",
                "name": "gender",
                "options": ["Male", "Female", "Other"]
            },
            {
                "type": "text",
                "label": "Country",
                "name": "country",
                "placeholder": "Your Country",
                "required": true
            },
            {
                "type": "text",
                "label": "State",
                "name": "state",
                "placeholder": "Your State",
                "required": true
            },
            {
                "type": "rating",
                "name": "overallExperience0",
                "label": "How would you rate your overall user experience on our website?"
            },
            {
                "type": "rating",
                "name": "overallExperience1",
                "label": "How easy was it to navigate through the website?"
            },
            {
                "type": "rating",
                "name": "overallExperience2",
                "label": "How would you rate the quality of the content on our website?"
            },
            {
                "type": "rating",
                "name": "overallExperience3",
                "label": "How satisfied are you with the website's load speed?"
            },
            {
                "type": "textarea",
                "name":"suggestions",
                "label": "What suggestions do you have for improving the website's functionality and user experience?",
                "placeholder": "Enter your comments here"
            },
        ]
    },
    {
        formId: 5,
        formCardImg: TeacherImg,
        formImg: TeacherFormImg,
        formTitle: "Teacher FeedBack Form",
        formDescription: "We appreciate your thoughts on our teaching methods and faculty; your feedback helps us ensure high-quality education and support for our students.",
        formFields: [
            {
                "type": "text",
                "label": "First Name",
                "name": "firstName",
                "placeholder": "Enter your first name",
                "required": true
            },
            {
                "type": "text",
                "label": "Last Name",
                "name": "lastName",
                "placeholder": "Enter your last name",
                "required": true
            },
            {
                "type": "email",
                "label": "Email",
                "name": "email",
                "placeholder": "Enter your email",
                "required": true
            },
            {
                "type": "number",
                "label": "Age",
                "name": "age",
                "placeholder": "Enter your age",
                "required": true
            },
            {
                "type": "radio",
                "label": "Gender",
                "name": "gender",
                "options": ["Male", "Female", "Other"]
            },
            {
                "type": "text",
                "label": "Country",
                "name": "country",
                "placeholder": "Your Country",
                "required": true
            },
            {
                "type": "text",
                "label": "State",
                "name": "state",
                "placeholder": "Your State",
                "required": true
            },
            {
                "type": "rating",
                "name": "overallExperience0",
                "label": "How would you rate the overall teaching effectiveness of the instructor?"
            },
            {
                "type": "rating",
                "name": "overallExperience1",
                "label": "How clear and understandable was the course content delivered by the instructor?"
            },
            {
                "type": "rating",
                "name": "overallExperience2",
                "label": "How engaged did you feel during the classes?"
            },
            {
                "type": "rating",
                "name": "overallExperience3",
                "label": "How would you rate the instructor's feedback and support provided to students?"
            },
            {
                "type": "textarea",
                "name":"suggestions",
                "label": "What suggestions do you have for improving the teaching methods and faculty support?",
                "placeholder": "Enter your comments here"
            },
        ]
    },
]