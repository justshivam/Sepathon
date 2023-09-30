import React, { useState, useEffect, useRef } from 'react';
import Co2JsService from '../Services/Co2JsService';
import { FlaskService } from '../Services/Service';
import { callbackOrError } from '../utils/toast';

type Props = {}

export default function TestComponent({}: Props) {
  const [text, setText] = useState<any>('Not Available Yet');
  const websiteURL = useRef<any>('');
  useEffect(() => {
    // FlaskService.testRoute().then((response:any) => callbackOrError(response, setText, 'Something Went Wrong'))
  }, [])
  const handleSubmit = () => {
    FlaskService.networkTraffic({url: websiteURL.current.value}).then((response) => callbackOrError(response, (data:any) => setText(data.transfers), 'Unable to get result'))
  }
  
  return (
    <div><input type="text" ref={websiteURL} /><button onClick={handleSubmit}>Submit</button>{text}</div>
  )
}