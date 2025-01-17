package com.example.board_back.common;

public interface ResponseMessage {

        //HTTP Status 200
        public static final String SUCCES = "Success.";

        //400
        String VALIDATION_FAILED ="VF"; 
        String DUPLICATE_EMAIL ="DE";
        String DUPLICATE_NICKNAME = "DN";
        String DUPLICATE_TEL_NUMBER = "DT";
        String NOT_EXISTED_USER = "NU";
        String NOT_EXISTED_BOARD = "NB";
    
        //401
        String SIGN_IN_FAIL ="SF";
        String AUTHORIZATION_FAIL = "AF";
    
        //403
        String No_PERMISSION = "NP";
    
        //500
        String DATABASE_ERROR ="DBE";
    
}
