const Form = require('../Models/Form.Model');
const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZone: 'Asia/Kolkata',
    timeZoneName: 'short'
};
const timestamp = new Date().toLocaleString('en-US', options)

const formFetch = async (req, res) => {
    try {
        const { country, state, formTitle, search } = req.query;

        let query = {};

        if (country) {
            query['fields.label'] = 'Country';
            query['fields.value'] = country;
        }
        if (state) {
            query['fields.label'] = 'State';
            query['fields.value'] = state;
        }
        if (formTitle) {
            query.formTitle = formTitle;
        }
        if (search) {
            query.$or = [
                { formTitle: { $regex: search, $options: 'i' } },
                { 'fields.value': { $regex: search, $options: 'i' } },
            ];
        }

        const submissions = await Form.find(query);
        res.status(200).json({
            status: 'success',
            data: submissions
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const formSubmit = async (req, res) => {
    try {
        const formData = req.body;
        const newFormEntry = new Form(formData);
        await newFormEntry.save();
        res.status(201).json({ message: 'Form data saved successfully' });
    } catch (error) {
        console.error(`[${timestamp}] Error submitting form:`, error);
        res.status(500).json({ message: 'Failed to save form data', error: error.message });
    }
}
const formUpdate = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedFormData = req.body;
        const updatedForm = await Form.findByIdAndUpdate(id, updatedFormData, { new: true });
        if (!updatedForm) {
            return res.status(404).json({ message: 'Form not found' });
        }
        res.status(200).json({ message: 'Form updated successfully', updatedForm });
    } catch (error) {
        console.error(`[${timestamp}] Error editing form:`, error);
        res.status(500).json({ message: 'Failed to update form data', error: error.message });
    }
}
const formDelete = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedForm = await Form.findByIdAndDelete(id);
        if (!deletedForm) {
            return res.status(404).json({ message: 'Form not found' });
        }
        res.status(200).json({ message: 'Form deleted successfully' });
    } catch (error) {
        console.error(`[${timestamp}] Error deleting form:`, error);
        res.status(500).json({ message: 'Failed to delete form data', error: error.message });
    }
}

module.exports = {
    formSubmit,
    formUpdate,
    formDelete,
    formFetch
}