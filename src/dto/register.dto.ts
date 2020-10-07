import * as yup from 'yup'

export default yup.object().shape({
    email: yup.string().required().email(),
    userName: yup.string().trim().required()
})