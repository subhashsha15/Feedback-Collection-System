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
        formDescription:"Thank you for attending Tech Innovators Summit 2024, a premier event showcasing the latest advancements and trends in technology.",
        formFields: [
            {
                "type": "text",
                "label": "First Name",
                "placeholder": "Enter your first name",
                "required": true
            },
            {
                "type": "text",
                "label": "Last Name",
                "placeholder": "Enter your last name",
                "required": true
            },
            {
                "type": "email",
                "label": "Email",
                "placeholder": "Enter your email",
                "required": true
            },
            {
                "type": "number",
                "label": "Age",
                "placeholder": "Enter your age",
                "required": true
            },
            {
                "type": "checkbox",
                "label": "Subscribe to Newsletter",
                "default": false
            },
            {
                "type": "radio",
                "label": "Gender",
                "options": ["Male", "Female", "Other"]
            },
            {
                "type": "select",
                "label": "Country",
                "options": ["USA", "Canada", "UK", "Australia"]
            },
            {
                "type": "textarea",
                "label": "Comments",
                "placeholder": "Enter your comments here"
            },
            {
                "type": "date",
                "label": "Date of Birth"
            }
        ]
    },
    {
        formId: 2,
        formCardImg: CourseImg,
        formImg: CourseFormImg,
        formTitle: "Course FeedBack Form",
        formDescription:"Thank you for participating in our Advanced Web Development course.Your feedback helps us enhance the learning experience for future participants.",
        formFields: [
            {
                "type": "text",
                "label": "First Name",
                "placeholder": "Enter your first name",
                "required": true
            },
            {
                "type": "text",
                "label": "Last Name",
                "placeholder": "Enter your last name",
                "required": true
            },
            {
                "type": "email",
                "label": "Email",
                "placeholder": "Enter your email",
                "required": true
            },
            {
                "type": "number",
                "label": "Age",
                "placeholder": "Enter your age",
                "required": true
            },
            {
                "type": "checkbox",
                "label": "Subscribe to Newsletter",
                "default": false
            },
            {
                "type": "radio",
                "label": "Gender",
                "options": ["Male", "Female", "Other"]
            },
            {
                "type": "select",
                "label": "Country",
                "options": ["USA", "Canada", "UK", "Australia"]
            },
            {
                "type": "textarea",
                "label": "Comments",
                "placeholder": "Enter your comments here"
            },
            {
                "type": "date",
                "label": "Date of Birth"
            }
        ]
    },
    {
        formId: 3,
        formCardImg: EmployeeImg,
        formImg: EmployeeFormImg,
        formTitle: "Employee FeedBack Form",
        formDescription:"We value your insights on your workplace experience; please provide feedback to help us improve our company environment and processes.",
        formFields: [
            {
                "type": "text",
                "label": "First Name",
                "placeholder": "Enter your first name",
                "required": true
            },
            {
                "type": "text",
                "label": "Last Name",
                "placeholder": "Enter your last name",
                "required": true
            },
            {
                "type": "email",
                "label": "Email",
                "placeholder": "Enter your email",
                "required": true
            },
            {
                "type": "number",
                "label": "Age",
                "placeholder": "Enter your age",
                "required": true
            },
            {
                "type": "checkbox",
                "label": "Subscribe to Newsletter",
                "default": false
            },
            {
                "type": "radio",
                "label": "Gender",
                "options": ["Male", "Female", "Other"]
            },
            {
                "type": "select",
                "label": "Country",
                "options": ["USA", "Canada", "UK", "Australia"]
            },
            {
                "type": "textarea",
                "label": "Comments",
                "placeholder": "Enter your comments here"
            },
            {
                "type": "date",
                "label": "Date of Birth"
            }
        ]
    },
    {
        formId: 4,
        formCardImg: WebsiteImg,
        formImg: WebsiteFormImg,
        formTitle: "Website FeedBack Form",
        formDescription:"Thank you for visiting our site; your feedback is crucial in helping us improve our website's functionality and user experience.",
        formFields: [
            {
                "type": "text",
                "label": "First Name",
                "placeholder": "Enter your first name",
                "required": true
            },
            {
                "type": "text",
                "label": "Last Name",
                "placeholder": "Enter your last name",
                "required": true
            },
            {
                "type": "email",
                "label": "Email",
                "placeholder": "Enter your email",
                "required": true
            },
            {
                "type": "number",
                "label": "Age",
                "placeholder": "Enter your age",
                "required": true
            },
            {
                "type": "checkbox",
                "label": "Subscribe to Newsletter",
                "default": false
            },
            {
                "type": "radio",
                "label": "Gender",
                "options": ["Male", "Female", "Other"]
            },
            {
                "type": "select",
                "label": "Country",
                "options": ["USA", "Canada", "UK", "Australia"]
            },
            {
                "type": "textarea",
                "label": "Comments",
                "placeholder": "Enter your comments here"
            },
            {
                "type": "date",
                "label": "Date of Birth"
            }
        ]
    },
    {
        formId: 5,
        formCardImg: TeacherImg,
        formImg: TeacherFormImg,
        formTitle: "Teacher FeedBack Form",
        formDescription:"We appreciate your thoughts on our teaching methods and faculty; your feedback helps us ensure high-quality education and support for our students.",
        formFields: [
            {
                "type": "text",
                "label": "First Name",
                "placeholder": "Enter your first name",
                "required": true
            },
            {
                "type": "text",
                "label": "Last Name",
                "placeholder": "Enter your last name",
                "required": true
            },
            {
                "type": "email",
                "label": "Email",
                "placeholder": "Enter your email",
                "required": true
            },
            {
                "type": "number",
                "label": "Age",
                "placeholder": "Enter your age",
                "required": true
            },
            {
                "type": "checkbox",
                "label": "Subscribe to Newsletter",
                "default": false
            },
            {
                "type": "radio",
                "label": "Gender",
                "options": ["Male", "Female", "Other"]
            },
            {
                "type": "select",
                "label": "Country",
                "options": ["USA", "Canada", "UK", "Australia"]
            },
            {
                "type": "textarea",
                "label": "Comments",
                "placeholder": "Enter your comments here"
            },
            {
                "type": "date",
                "label": "Date of Birth"
            }
        ]
    },
]