/* eslint-disable no-param-reassign */
export {};

const closeModal = (modalEl: HTMLDivElement) => {
  modalEl.style.opacity = '0';
  modalEl.style.overflowY = 'inherit';
  modalEl.style.pointerEvents = 'none';
  document.body.style.overflowY = 'auto';
};

const openModal = (modalEl: HTMLDivElement) => {
  modalEl.style.opacity = '1';
  modalEl.style.overflowY = 'auto';
  modalEl.style.pointerEvents = 'auto';
  document.body.style.overflowY = 'hidden';
};

const modalElList = document.querySelectorAll('.modal');
const [policyModalEl, callFormModalEl, planFormModalEl] = modalElList;
const modalWrapperElList = document.querySelectorAll('.modal__center-wrapper');
modalElList.forEach(modalEl => {
  modalEl.addEventListener('click', (e: Event) => {
    if (e.target === e.currentTarget || [...modalWrapperElList].includes(e.target as Element)) {
      const clickedModal = e.currentTarget as HTMLDivElement;
      closeModal(clickedModal);
    }
  });
});

const closeModalElList = document.querySelectorAll('.modal__close');
closeModalElList.forEach(closeEl => {
  closeEl.addEventListener('click', () => {
    modalElList.forEach(modalEL => {
      closeModal(modalEL as HTMLDivElement);
    });
  });
});

// Найти кнопки и прописать события
const policyBtnElList = document.querySelectorAll('.js-policy');
policyBtnElList.forEach(el => {
  el.addEventListener('click', () => {
    openModal(policyModalEl as HTMLDivElement);
  });
});

const modalCallBtnElList = document.querySelectorAll('.js-call-form-modal');
modalCallBtnElList.forEach(el => {
  el.addEventListener('click', () => {
    openModal(callFormModalEl as HTMLDivElement);
  });
});

const modalPlanBtnElList = document.querySelectorAll('.js-plan-form-modal');
modalPlanBtnElList.forEach(el => {
  el.addEventListener('click', () => {
    openModal(planFormModalEl as HTMLDivElement);
  });
});
