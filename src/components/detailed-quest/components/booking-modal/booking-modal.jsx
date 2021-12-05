import * as S from './booking-modal.styled';
import { ReactComponent as IconClose } from 'assets/img/icon-close.svg';
import { useState } from 'react';
import { createAPI } from 'services/api';
import { APIRoute } from 'const';
import { toast } from 'react-toastify';

const PEOPLE_COUNT_MIN = 1;
const PEOPLE_COUNT_MAX = 99;
const PHONE_LENGTH = 10;
const PHONE_PATTERN = /^[0-9]{10}$/;

const api = createAPI()

const BookingModal = ({ callback: handleCloseBookingModal }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [peopleCount, setPeopleCount] = useState('');

  const onChangeNameInput = (evt) => {
    setName(evt.target.value);
  };

  const onChangePhoneInput = (evt) => {
    const re = PHONE_PATTERN;

    if (!re.test(evt.target.value)) {
      evt.target.setCustomValidity('Номер телефона должен состоять из 10 цифр, например: 9991234567');
    }
    else {
      evt.target.setCustomValidity('');
    }

    setPhone(evt.target.value);
    evt.target.reportValidity();
  };

  const onChangePeopleCountInput = (evt) => {
    setPeopleCount(evt.target.value);
  };

  const postFormData = async (formData) => {
    try {
      await api.post(APIRoute.Orders, formData);
      toast.info('Заявка успешно отправлена');
    }
    catch (error) {
      toast.error(error.message);
    }
  }

  const onFormSubmit = (evt) => {
    evt.preventDefault();
    postFormData({
      name: name,
      peopleCount: +peopleCount,
      phone: phone,
      isLegal: true,
    });
    handleCloseBookingModal();
  }

  return (
    <S.BlockLayer>
      <S.Modal>
        <S.ModalCloseBtn onClick={handleCloseBookingModal}>
          <IconClose width="16" height="16" />
          <S.ModalCloseLabel>Закрыть окно</S.ModalCloseLabel>
        </S.ModalCloseBtn>
        <S.ModalTitle>Оставить заявку</S.ModalTitle>
        <S.BookingForm
          action="https://echo.htmlacademy.ru"
          method="post"
          id="booking-form"
          onSubmit={onFormSubmit}
        >
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-name">Ваше Имя</S.BookingLabel>
            <S.BookingInput
              onChange={onChangeNameInput}
              type="text"
              id="booking-name"
              name="booking-name"
              placeholder="Имя"
              required
            />
          </S.BookingField>
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-phone">
              Контактный телефон
            </S.BookingLabel>
            <S.BookingInput
              onChange={onChangePhoneInput}
              type="tel"
              id="booking-phone"
              name="booking-phone"
              placeholder="Телефон"
              required
              minLength={PHONE_LENGTH}
              maxLength={PHONE_LENGTH}
            />
          </S.BookingField>
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-people">
              Количество участников
            </S.BookingLabel>
            <S.BookingInput
              onChange={onChangePeopleCountInput}
              type="number"
              id="booking-people"
              name="booking-people"
              placeholder="Количество участников"
              required
              min={PEOPLE_COUNT_MIN}
              max={PEOPLE_COUNT_MAX}
            />
          </S.BookingField>
          <S.BookingSubmit type="submit">Отправить заявку</S.BookingSubmit>
          <S.BookingCheckboxWrapper>
            <S.BookingCheckboxInput
              type="checkbox"
              id="booking-legal"
              name="booking-legal"
              required
            />
            <S.BookingCheckboxLabel
              className="checkbox-label"
              htmlFor="booking-legal"
            >
              <S.BookingCheckboxText>
                Я согласен с{' '}
                <S.BookingLegalLink href="#" onClick={(evt) => evt.preventDefault()}>
                  правилами обработки персональных данных и пользовательским
                  соглашением
                </S.BookingLegalLink>
              </S.BookingCheckboxText>
            </S.BookingCheckboxLabel>
          </S.BookingCheckboxWrapper>
        </S.BookingForm>
      </S.Modal>
    </S.BlockLayer>
  );
};

export default BookingModal;
