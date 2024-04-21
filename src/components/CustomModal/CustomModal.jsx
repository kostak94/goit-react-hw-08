import  Modal  from 'react-modal'
import ContactForm from '../ContactForm/ContactForm'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

const CustomModal = ({ isOpen, onClose, contact }) => {
    
  return (
    <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        style={customStyles}
    >
        <ContactForm contact={contact}/>
    </Modal>
  )
}

export default CustomModal;