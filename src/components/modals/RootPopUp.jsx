import React from 'react';
import { Modal } from '../../components/modals/Modal/Modal';
import { LogIn } from '../../components/modals/LogIn/LogIn';
import { Info } from '../../components/modals/Info/Info';
import { Cities } from '../../components/modals/Cities/Cities';
import { connect } from 'react-redux';
import { setStateOfPopUps, setStateOfAccount } from '../../redux/actions';

let RootPopUp = ({
    logIn,
    info,
    city,
    forgotPassword,
    resetPassword,
    setStateOfPopUps,
    setStateOfAccount,
}) => {
    return (
        <>
            {logIn && (
                <Modal>
                    <LogIn
                        setStateOfPopUps={setStateOfPopUps}
                        setStateOfAccount={setStateOfAccount}
                    />
                </Modal>
            )}
            {info && (
                <Modal>
                    <Info
                        title="Спасибо, что помогаете сделать нашу планету лучше!"
                        buttonText="Войти"
                        setStateOfPopUps={setStateOfPopUps}
                    />
                </Modal>
            )}
            {forgotPassword && (
                <Modal>
                    <Info
                        title="На вашу почту будет отправлена ссылка для сброса пароля"
                        buttonText="Войти"
                        setStateOfPopUps={setStateOfPopUps}
                    />
                </Modal>
            )}
            {resetPassword && (
                <Modal>
                    <Info
                        title="Вы сменили пароль"
                        buttonText="Войти"
                        setStateOfPopUps={setStateOfPopUps}
                    />
                </Modal>
            )}
            {city && (
                <Modal>
                    <Cities setStateOfPopUps={setStateOfPopUps} />
                </Modal>
            )}
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        logIn: state.popUps.logIn,
        info: state.popUps.info,
        city: state.popUps.city,
        resetPassword: state.popUps.resetPassword,
        forgotPassword: state.popUps.forgotPassword,
    };
};

RootPopUp = connect(mapStateToProps, { setStateOfPopUps, setStateOfAccount })(
    RootPopUp
);

export { RootPopUp };
