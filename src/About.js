import './css/about.css';
import about from './function/about';

export default function About(){
    return(
      <>
        <main className='about_main'>
          <section className='profile'>
              <p><img src="/source/about/profile.jpg" /></p>
              <div>
                  <p>송창욱 <span>Song Changwook</span></p>
                  <p>1994.09.23</p>
                  <p>Email Address</p>
                  <p>scw9327@naver.com</p>
                  <p>Phone Number</p>
                  <p>010-3575-0126</p>
                  <p>Education</p>
                  <p>
                      그린컴퓨터 아카데미 UI/UX  프론트엔드 개발자 양성과정수료 (2020.12 ~2021.05)<br />
                      경기과학기술대학교 기계설계과 졸업 (2013.03. ~ 2019.02)
                  </p>
              </div>
              <p>“Simple, Easy, Perfect”<br /><br />
  
                  시드니의 어떤 편집샵에서 점원이 제게 외친말입니다.<br />
                  흰티에 청바지, 까만색 컨버스를 신은 저의 옷은 <br />
                  특별하지 않았습니다.<br />
                  하지만 특별한 사람을 보듯이 제게 다가오며 박수를 쳐주었습니다.<br /><br />
  
                  간단고 간편해서 완벽하다는 말이 제게는 특별하게 다가왔고<br />
                  저의 삶의 모토가 되었습니다.<br /><br />
  
                  Simple함을 추구하는건 쉬운일이 아닙니다.<br />
                  부족하지 않게 채우고<br />
                  과하지 않게 덜어낼 수 있어야합니다.<br /><br />
  
                  코딩을 하며 로직을 설계하는 과정에도<br />
                  어떻게하면 간단한 과정으로 로직이 작동되고<br />
                  사용하고 수정하기 쉬울지 항상 고민합니다.<br /><br />
  
                  그리고<br />
                  결국엔 해결을 해냅니다.</p>
          </section>
          <section className='skills'>
              <article>
                  <figure>
                      <p><img src="/source/about/logo/60/html.png" alt="" /></p>
                      <figcaption>
                          웹 표준/접근성에 대해 이해하고 다양한 종류와 버전에 따른 브라우저에 맞게 마크업합니다.
                      </figcaption>
                  </figure>
                  <figure>
                      <p><img src="/source/about/logo/60/css.png" alt="" /></p>
                      <figcaption>
                          UI/UX를 생각하며 다양한 기기, 브라우저에 최적화된 퍼블리싱을 합니다. 유동적으로 변화하는 반응형웹도 제작이 가능합니다.
                      </figcaption>
                  </figure>
                  <figure>
                      <p><img src="/source/about/logo/60/javascript.png" alt="" /></p>
                      <figcaption>
                          객체지향을 이해하며 함수, 메소드 등 다양하게 활용합니다. 그리고 let, const, Arrow Function과 같은 ES6 기초를 이해하고 활용합니다.
                      </figcaption>
                  </figure>
                  <figure>
                      <p><img src="/source/about/logo/60/react.png" alt="" /></p>
                      <figcaption>
                          JSX 문법에 맞춰 사용할 줄 알고 필요한 객채들을 
                          컴포넌트로 만들어 모듈화 작업을 하기 쉽게 만듭니다.
                          페이지 이동시에 props를 이용해
                          데이터를 전달합니다.
                          외부 API를 가져와 데이터를 활용하고
                          그래프를 이용하여 수치를 시각적으로
                          표현할 수 있습니다.
                      </figcaption>
                  </figure>
              </article>
              <article>
                  <figure>
                      <p><img src="/source/about/logo/60/sass.png" alt="" /></p>
                      <figcaption>
                          SCSS를 사용하여  보다 쉽고 시인성있게 코딩할 수 있습니다.
                          mixin과 함수를 이용해 보다 효율적인 작업이 가능합니다.  
                      </figcaption>
                  </figure>
                  <figure>
                      <p><img src="/source/about/logo/60/jquery.png" alt="" /></p>
                      <figcaption>
                          다양한 메소드를 사용해 기능을 구현합니다. 또한 항상 웹속도와 효율을 고려하며 자바스크립트와 함께 활용하고 있습니다.
                          플러그인 API 활용, 수정이 가능합니다.<br /><br />
      
                          AJAX를 이용해 json, xml 데이터를  활용해
                          필요한 곳에 적합한 데이터를 보낼 수 있습니다.
                      </figcaption>
                  </figure>
                  <figure>
                      <p><img src="/source/about/logo/xampp.png" alt="" /></p>
                      <figcaption>
                          mysql을 이용하여 테이블에 원하는 데이터를 저장, 수정, 삭제할 수 있습니다.
                          간단한 회원등록 페이지나 이미지 파일을 올리거나 내릴 수 있는 갤러리, 그누보드를 이용한 게시판등을 제작할 수 있습니다.
                      </figcaption>
                  </figure>
                  <figure>
                      <p><img src="/source/about/logo/60/webpack.png" alt="" /></p>
                      <figcaption>
                          HTML파일과 Java script파일을 모듈화 시키고 번들로 만들 수 있습니다.
                          개발 버전과 배포버전을 구분해서 만들 수 있으며 
                          Babel을 이용해 낮은 버전에서도
                          구동될 수 있도록 합니다.
                      </figcaption>
                  </figure>
              </article>     
          </section>
      </main>
      {about()}
      </>
    );
}
