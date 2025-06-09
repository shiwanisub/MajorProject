.faq-section {
  padding: var(--spacing-4xl) 0;
  background-color: var(--white);
}

.section-header {
  text-align: center;
  margin-bottom: var(--spacing-4xl);
}

.section-header h2 {
  font-size: var(--font-size-3xl);
  color: var(--gray-900);
  margin-bottom: var(--spacing-md);
  font-weight: 700;
}

.section-header p {
  font-size: var(--font-size-lg);
  color: var(--gray-600);
  max-width: 700px;
  margin: 0 auto;
}

.faq-container {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: var(--spacing-3xl);
  align-items: start;
}

.faq-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.faq-item {
  background-color: var(--white);
  border: 1px solid var(--gray-200);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: all var(--transition-normal);
}

.faq-item:hover {
  border-color: var(--primary-color);
  box-shadow: var(--shadow-md);
}

.faq-item.active {
  border-color: var(--primary-color);
  box-shadow: var(--shadow-lg);
}

.faq-question {
  width: 100%;
  padding: var(--spacing-lg);
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: var(--font-size-lg);
  font-weight: 600;
  color: var(--gray-900);
  transition: all var(--transition-fast);
}

.faq-question:hover {
  color: var(--primary-color);
}

.faq-icon {
  color: var(--primary-color);
  transition: transform var(--transition-fast);
  flex-shrink: 0;
}

.faq-item.active .faq-icon {
  transform: rotate(180deg);
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height var(--transition-normal) ease-out;
}

.faq-item.active .faq-answer {
  max-height: 200px;
}

.faq-answer p {
  padding: 0 var(--spacing-lg) var(--spacing-lg);
  color: var(--gray-600);
  line-height: 1.6;
  margin: 0;
}

.faq-contact {
  position: sticky;
  top: var(--spacing-xl);
}

.contact-card {
  background: linear-gradient(135deg, var(--primary-color), var(--primary-dark));
  color: var(--white);
  padding: var(--spacing-2xl);
  border-radius: var(--radius-xl);
  text-align: center;
}

.contact-card h3 {
  font-size: var(--font-size-xl);
  margin-bottom: var(--spacing-md);
  font-weight: 600;
}

.contact-card p {
  margin-bottom: var(--spacing-xl);
  opacity: 0.9;
}

.contact-options {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.contact-option {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-md);
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-md);
  color: var(--white);
  text-decoration: none;
  transition: all var(--transition-fast);
  backdrop-filter: blur(10px);
}

.contact-option:hover {
  background-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
  color: var(--white);
}

@media (max-width: 768px) {
  .faq-container {
    grid-template-columns: 1fr;
    gap: var(--spacing-2xl);
  }

  .faq-contact {
    position: static;
  }

  .faq-question {
    font-size: var(--font-size-base);
    padding: var(--spacing-md);
  }

  .contact-card {
    padding: var(--spacing-xl);
  }
}
