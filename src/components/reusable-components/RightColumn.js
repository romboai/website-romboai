import React, { useState } from 'react';
import styles from './RightColumn.module.css';
import arrowDown from '../../img/chevron-down.svg';
const RightColumn = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    role: '',
    email: '',
    telephone: '',
    terms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form data submitted:', formData);
  };

  return (
    <div className={styles.rightColumn}>
      <div className={styles.sectionText}>
        <div className={styles.top}>
          <b className={styles.secondaryHeadline}>Get In Touch</b>
        </div>
        <div className={styles.paragraph}>Rhoncus morbi et augue nec, in id ullamcorper at sit.</div>
      </div>
      <form onSubmit={handleSubmit} className={styles.form5FieldsCheckboxB}>
        <div className={styles.fieldsGroup}>
          <div className={styles.textField}>
            <div className={styles.sectionText}>
              <div className={styles.label}>First Name</div>
              <div className={styles.field}>
                <input
                  type="text"
                  className={styles.input}
                  placeholder="Placeholder"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className={styles.textField}>
            <div className={styles.sectionText}>
              <div className={styles.label}>Last Name</div>
              <div className={styles.field}>
                <input
                  type="text"
                  className={styles.input}
                  placeholder="Placeholder"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.textField2}>
          <div className={styles.sectionText}>
            <div className={styles.label}>ROLE / Company</div>
            <div className={styles.field}>
              <input
                type="text"
                className={styles.input}
                placeholder="Placeholder"
                name="role"
                value={formData.role}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className={styles.textField2}>
          <div className={styles.sectionText}>
            <div className={styles.label}>Email</div>
            <div className={styles.field}>
              <input
                type="email"
                className={styles.input}
                placeholder="Placeholder"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className={styles.textField2}>
          <div className={styles.sectionText}>
            <div className={styles.label}>Telephone</div>
            <div className={styles.field4}>
              <input
                type="tel"
                className={styles.input}
                placeholder="Placeholder"
                name="telephone"
                value={formData.telephone}
                onChange={handleChange}
              />
              <img className={styles.iconJamIconsOutlineL} alt="" src={arrowDown} />
            </div>
          </div>
        </div>
        <div className={styles.controlsWithLabel}>
          {/*<div className={styles.controls}>*/}
          {/*  <div className={styles.unionWrapper}>*/}
          {/*    <img className={styles.unionIcon} alt="" src="/path/to/Union.svg" />*/}
          {/*  </div>*/}
          {/*</div>*/}
          <div className={styles.labelName}>
            <input
              type="checkbox"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
            />
            I agree to the Terms and conditions. By registering, you confirm that you agree to the processing of your personal data by Rombo AI as described in the Privacy Statement.
          </div>
        </div>
        <div className={styles.buttonsGroup}>
          <button type="submit" className={styles.button}>
            <div className={styles.textContainer}>
              <div className={styles.buttonText}>Send email</div>
            </div>
          </button>
        </div>
      </form>
    </div>
  );
};

export default RightColumn;