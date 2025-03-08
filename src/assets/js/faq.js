document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', () => {
            const parent = question.parentElement;
            parent.classList.toggle('active');
            const answer = parent.querySelector('.faq-answer');
            if (answer) {
                if (parent.classList.contains('active')) {
                    answer.style.display = 'block';
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                    answer.style.transition = 'max-height 0.5s ease';
                    answer.style.overflow = 'hidden';
                } else {
                    answer.style.maxHeight = '0';
                    answer.style.overflow = 'hidden';
                    setTimeout(() => {
                        answer.style.display = 'none';
                    }, 500);
                }
            } else {
                console.warn('No answer element found for', question);
            }
        });
    });
});
