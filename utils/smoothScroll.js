const getTop = function(element, start) {
  if (element.nodeName === "HTML") return -start;
  return element.getBoundingClientRect().top + start;
};

const easeInOutCubic = function(t) {
  return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
};

const position = function(start, end, elapsed, duration) {
  if (elapsed > duration) return end;
  return start + (end - start) * easeInOutCubic(elapsed / duration);
};

const smoothScroll = function(el, duration, callback, context) {
  duration = duration || 500;
  context = context || window;
  const start = context.scrollTop || window.pageYOffset;
  let end;
  if (typeof el === "number") {
    end = parseInt(el) - 60;
  } else {
    end = getTop(el, start) - 60;
  }
  const clock = Date.now();
  const requestAnimationFrame =
    window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    function(fn) {
      window.setTimeout(fn, 15);
    };
  const step = function() {
    const elapsed = Date.now() - clock;
    if (context !== window) {
      context.scrollTop = position(start, end, elapsed, duration);
    } else {
      window.scroll(0, position(start, end, elapsed, duration));
    }

    if (elapsed > duration) {
      if (typeof callback === "function") {
        callback(el);
      }
    } else {
      requestAnimationFrame(step);
    }
  };
  step();
};

export default url => {
  return new Promise(function(resolve, reject) {
    const pattern = /^(\/#.+)|(.+(\/#.+))$/;
    if (pattern.test(url)) {
      const hash = pattern
        .exec(url)
        .filter(item => item)
        .pop();
      const id = hash.replace(/\/?#/, "");
      const el = document.getElementById(id);
      if (el) {
        smoothScroll(el, 600, resolve);
        return;
      }
    }
    reject(new Error("Error: hash in URL is invalid or element not found!"));
  });
};
