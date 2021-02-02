<template>
  <div class="error">
    <div class="error__monster">
      <div class="container">
        <div class="monster" />
        <div class="hair" />
        <div class="face">
          <div class="eyes">
            <div class="iris" />
          </div>
        </div>
        <div class="mouth" />
        <div class="drool" />
        <div class="teeth">
          <div />
          <div />
        </div>
        <div class="text" />
      </div>
    </div>
    <div class="error__text">
      <p class="text-404">
        404
      </p>
      <p class="text-error">
        It seems the page could not be found.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Error',
  props: {
    error: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.error {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 1fr);
  padding: bu(20) bu(60);
}

.error__monster,
.error__text {
  justify-self: center;
}

.error__monster {
  margin-left: bu(-148);
}

.container,
.monster,
.eyes,
.iris,
.mouth,
.face,
.text {
  position: absolute;
}

.container {
  margin: auto;
  width: bu(200);
  height: bu(100);
}

.face {
  left: bu(-3);
  transition: all 0.5s ease;
}

.monster {
  width: bu(150);
  height: bu(150);
  background: map-get($colours, 'colour-tulip-tree');
  border-radius: 100%;
  &:before,
  &:after {
    position: absolute;
    content: '';
    width: bu(20);
    height: bu(30);
    background: map-get($colours, 'colour-tulip-tree');
  }
  &:before {
    left: bu(20);
    border-radius: 100% 0 0 0;
  }
  &:after {
    left: bu(110);
    border-radius: 0 100% 0 0;
  }
}

.hair {
  position: absolute;
  top: bu(-2);
  left: bu(67);
  width: bu(10);
  height: bu(10);
  background: map-get($colours, 'colour-tulip-tree');
  border-radius: 100% 0 100% 100%;
  transform: rotate(-20deg);

  &:before{
    position: absolute;
    content: '';
    top: bu(3);
    left: bu(10);
    width: bu(10);
    height: bu(10);
    background: map-get($colours, 'colour-tulip-tree');
    border-radius: 100% 0 100% 100%;

  }
}

.eyes {
  width: bu(30);
  height: bu(30);
  background: map-get($colours, 'colour-merino');
  top: bu(50);
  left: bu(30);
  border-radius: 100%;
  &:before {
    position: absolute;
    content: '';
    width: bu(30);
    height: bu(30);
    background: map-get($colours, 'colour-merino');
    left: bu(70);
    border-radius: 100%;
  }
}

.iris {
  width: bu(20);
  height: bu(20);
  background: map-get($colours, 'colour-pelorous');
  border-radius: 100%;
  top: bu(5);
  left: bu(7);
  &:before {
    position: absolute;
    content: '';
    width: bu(20);
    height: bu(20);
    background: map-get($colours, 'colour-pelorous');
    border-radius: 100%;
    left: bu(66);
  }
}

.mouth {
  overflow: hidden;
  top: bu(90);
  left: bu(50);
  width: bu(60);
  height: bu(3);
  background: map-get($colours, 'colour-slate-gray');
  border-radius: 0 0 100px 100px;
  transition: all 0.5s ease;
  &:before {
    position: absolute;
    left: bu(17);
    top: bu(15);
    content: '';
    width: bu(50);
    height: bu(30);
    background: map-get($colours, 'colour-slate-gray');
    border-radius: 100%;
  }
}

.teeth {
  position: relative;
  top: bu(90);
  left: bu(60);
  div:nth-child(1) {
    position: absolute;
    width: bu(7);
    height: bu(10);
    background: map-get($colours, 'colour-merino');
    border-radius: 0 0 0 100%;
  }
  div:nth-child(2) {
    position: absolute;
    left: bu(30);
    width: bu(7);
    height: bu(10);
    background: map-get($colours, 'colour-merino');
    border-radius: 0 0 100% 0;
  }
}

.monster:hover ~ .mouth {
  height: bu(30);
}

.monster:hover ~ .drool {
  transform: translate(bu(3), bu(20));
}

.drool {
  position: absolute;
  top: bu(90);
  left: bu(53);
  width: bu(4);
  height: bu(25);
  background: #C5DFEA;
  border-radius: bu(100);
  transition: all 0.2s ease;
  animation: 5s drip infinite ease;
  &:before {
    position: absolute;
    content: '';
    width: bu(6);
    height: bu(6);
    background: #C5DFEA;
    top: bu(30);
    left: -1px;
    border-radius: 0 100% 100% 100%;
    transform: rotate(40deg);
    animation: 2s droplet infinite ease;
  }
}

.text {
  background: #C5DFEA - 10;
  border-radius: 100%;
  height: bu(20);
  width: bu(130);
  top: bu(158);
  left: bu(16);
  font-family: sans-serif;
  font-size: bu(14);
  letter-spacing: bu(1);
  box-shadow: bu(3) bu(1) bu(2) #A2B7C0;

}

@keyframes drip {
  100% {
    height: bu(40);
  }
}

@keyframes droplet {
  100% {
    transform: translateY(bu(33));
  }
}

.error__text {
  text-align: center;
  padding-top: bu(30);

  .text-404 {
    @include font(map-get($fonts, 'pt-sans'), bu(30), bu(30), normal);
    color: map-get($colours, 'colour-slate-gray');
    margin-bottom: bu(10);
  }

  .text-error {
    @include font(map-get($fonts, 'pt-sans'), bu(20), bu(31), normal);
  }
}
</style>
