import { motion, animatePresence} from 'framer-motion';
import { useSnapshot } from 'valtio';
import state from '../store';
import { CustomButton } from '../components';
import{
  headContainerAnimation,
  headcontentAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/motion';

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation('left')}>
          <motion.header {...slideAnimation("down")}>
            <img
              src= './threejs.png'
              alt="logo"
              className= "w-8 h-8 object-contain"
              />
          </motion.header>
          <motion.div className="Home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className= "head-text">
                LET'S <br className= "x1:block hidden" /> DO IT.
              </h1>
            </motion.div>
            <motion.div>

              <p className="max-w-md font-mormal text-grey-600 text-base">
                Create your unique and exclusive shirt with our brand-new 3D customization tool.<strong>
                  unleash your imagination</strong>{" "} and define your own style.
              </p>
              <CustomButton
                type = "filled"
                title = "Customiz It"
                handleClick={() => state.intro = false}
                customStyle="w-fit px-4 py-2.5 font-bold text-sm"
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home