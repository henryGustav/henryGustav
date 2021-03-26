import React, { useEffect } from 'react'
import * as Scroll from 'react-scroll'

import {
  Link ,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller, Button
} from 'react-scroll'

// let Link = Scroll.Link2
// let Element = Scroll.Element
// let Events = Scroll.Events
// let scroll = Scroll.animateScroll
// let scrollSpy = Scroll.scrollSpy

// ES5
const Scoll = () => {
  //   var Link = Scroll.Link
  //   var Element = Scroll.Element
  //   var Events = Scroll.Events
  //   var scroll = Scroll.animateScroll
  //   var scrollSpy = Scroll.scrollSpy

  useEffect(() => {
    Events.scrollEvent.register('begin', function (to, element) {
      console.log('begin', arguments)
    })

    Events.scrollEvent.register('end', function (to, element) {
      console.log('end', arguments)
    })

    scrollSpy.update()
  }, [])

  const scrollToTop = () => {
    scroll.scrollToTop()
  }
  const scrollToBottom = () => {
    scroll.scrollToBottom()
  }

  const scrollTo = () => {
    scroll.scrollTo(100)
  }

  const scrollMore = () => {
    scroll.scrollMore(100)
  }
  const handleSetActive = () => {
    console.log(to)
  }
  return (
    <div>
      <Link
        activeClass='active'
        to='test1'
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        onSetActive={handleSetActive}
      >
        Test 1
      </Link>
      <Link
        activeClass='active'
        to='test1'
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        delay={1000}
      >
        Test 2 (delay)
      </Link>
      <Link
        className='test6'
        to='anchor'
        spy={true}
        smooth={true}
        duration={500}
      >
        Test 6 (anchor)
      </Link>
      {/* <Button
        activeClass='active'
        className='btn'
        type='submit'
        value='Test 2'
        to='test2'
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
      >
        Test 2
      </Button> */}

      <Element name='test1' className='element'>
        test 1
      </Element>

      <Element name='test2' className='element'>
        test 2
      </Element>

      <div id='anchor' className='element'>
        test 6 (anchor)
      </div>

      <Link to='firstInsideContainer' containerId='containerElement'>
        Go to first element inside container
      </Link>

      <Link to='secondInsideContainer' containerId='containerElement'>
        Go to second element inside container
      </Link>
      <div className='element' id='containerElement'>
        <Element name='firstInsideContainer'>
          first element inside container
        </Element>

        <Element name='secondInsideContainer'>
          second element inside container
        </Element>
      </div>

      <a onClick={scrollToTop}>To the top!</a>
      <br />
      <a onClick={scrollToBottom}>To the bottom!</a>
      <br />
      <a onClick={scrollTo}>Scroll to 100px from the top</a>
      <br />
      <a onClick={scrollMore}>Scroll 100px more from the current position!</a>
    </div>
  )
}

export default Scoll
