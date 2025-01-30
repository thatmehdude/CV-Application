import './styles/App.css'
/* eslint-disable react/prop-types */
const GeneralInfo = ({generalInfo, onGeneralInfoChange, isEditing}) => {
    return (
        <div className="general-info">
            <h2>General Information</h2>
            {isEditing ? (
                <form action="">
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={generalInfo.name}
                        onChange={onGeneralInfoChange}
                        placeholder="Enter your name"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={generalInfo.email}
                        onChange={onGeneralInfoChange}
                        placeholder="Enter your email"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone:</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={generalInfo.phone}
                        onChange={onGeneralInfoChange}
                        placeholder="Enter your phone number"
                    />
                </div>
            </form>
            ) : (
                <div className="submitted-info">
                    <p><strong>Name:</strong> {generalInfo.name}</p>
                    <p><strong>Email:</strong> {generalInfo.email}</p>
                    <p><strong>Phone:</strong> {generalInfo.phone}</p>
                </div>
            )}
            
        </div>
    )
}

export default GeneralInfo;