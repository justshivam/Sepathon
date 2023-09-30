import React, { useState, useEffect } from 'react';
import Co2JsService from '../Services/Co2JsService';
import { FlaskService } from '../Services/Service';
import { callbackOrError } from '../utils/toast';

type Props = {}

export default function TestComponent({}: Props) {
  const [text, setText] = useState<any>('Not Available Yet');
  useEffect(() => {
    FlaskService.testRoute().then((response:any) => callbackOrError(response, setText, 'Something Went Wrong'))
  }, [])
  
  return (
    <div>{text}</div>
  )
}