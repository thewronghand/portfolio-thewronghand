import { motion } from 'framer-motion';
import BlogIntro from '../Components/Blog/BlogIntro';
import { useEffect } from 'react';
import { useColorScheme } from '../utils/hooks/useColorScheme';
import { blogStyle as style } from './pages.css';
import Background from '../Components/Global/Background';

export default function Blog() {
  const colorScheme = useColorScheme();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Background>
      <main className={style.container}>
        <BlogIntro />
        <motion.div
          style={{ background: colorScheme.LIGHT.BG }}
          className={style.iframeSection}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div className={style.iframeContainer}>
            <iframe
              src="https://vitriol-345e3.web.app/"
              className={style.iframe}
            ></iframe>
          </div>
        </motion.div>
      </main>
    </Background>
  );
}
