import { NewsFeed, NewsDetail } from '../types';

export class Api {
    xhr: XMLHttpRequest;
    url: string;
  
    constructor(url: string) {
      this.xhr = new XMLHttpRequest();
      this.url = url;
    }
  
    async request<AjaxResponse>() : Promise<AjaxResponse> {
      const response = await fetch(this.url);
      return response.json() as AjaxResponse;
    }
    //XHR_Callbackメソッドを活用して練習。今は使ってないメソッド
    getRequestWithXHR<AjaxResponse>(cb:(data : AjaxResponse)=> void): void {
      this.xhr.open('GET', this.url);
      this.xhr.addEventListener('load', ()=>{
        cb(JSON.parse(this.xhr.response) as AjaxResponse);
      });
      this.xhr.send();
    }
    //promiseメソッドを活用して練習。今は使ってないメソッド
    getRequestWithPromise<AjaxResponse>(cb:(data : AjaxResponse)=> void): void {
       fetch(this.url)
       .then(response => response.json())
       .then(cb)
       .catch(()=>{
        console.error("cant read data")
       })
    }
  }

  
  export class NewsFeedApi extends Api {
    constructor(url: string){
      super(url);
    }
    async getdata() : Promise<NewsFeed[]>{
      return await this.request<NewsFeed[]>();
    }
  }
  
  export class NewsDetailApi extends Api {
    constructor(url: string){
      super(url);
    }
    async getdata() : Promise<NewsDetail>{
      return await this.request<NewsDetail>();
    }
  }