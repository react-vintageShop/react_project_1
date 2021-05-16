import React, { useEffect } from 'react';
import Link from 'next/link';
import Router from 'next/router';

import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { LoginformStyle } from '../style/FormStyle';
import { LOG_IN_REQUEST } from '../reducers/action';
import { loginAction } from '../reducers/user/userReducer';

const login = () => {
  const dispatch = useDispatch();
  const { isLoginDone } = useSelector((state) => state.user);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(loginAction(data));
    // dispatch({
    //   type: LOG_IN_REQUEST,
    //   data,
    // });
  };

  useEffect(() => {
    if (isLoginDone === true) {
      Router.push('/');
    }
  }, [isLoginDone]);

  return (
    <LoginformStyle>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form__content">
          <div>Email Address</div>
          <input
            type="text"
            placeholder="Enter Id"
            {...register('userId', {
              required: { value: true, message: '아이디를 입력해주세요' },
            })}
          />
        </div>
        {errors && errors.userId && (
          <p role="alert" style={{ color: 'red' }}>
            {errors.userId.message}
          </p>
        )}
        <div className="form__content">
          <div>Password</div>
          <input
            type="password"
            placeholder="Enter password"
            {...register('userPw', {
              required: {
                value: true,
                message: '비밀번호를 입력해주세요.',
              },
            })}
          />
        </div>
        {errors && errors.userPw && (
          <p role="alert" style={{ color: 'red' }}>
            {errors.userPw.message}
          </p>
        )}

        <button type="submit" className="btn">
          SIGN IN
        </button>
      </form>
      <div className="form__content__subtitle">
        New Customer?
        <Link href="/join">
          <a> REGISTER</a>
        </Link>
      </div>
    </LoginformStyle>
  );
};

export default login;
