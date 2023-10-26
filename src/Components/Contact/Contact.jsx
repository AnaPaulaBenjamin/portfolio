import React from 'react';
import { useTrail, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import Styles from '../Contact/Contact.module.css';
import ContactItem from './ContactItem';
import IconEmail from '../../assets/Contact/Email';
import IconGithub from '../../assets/Contact/Github';
import IconLinkedin from '../../assets/Contact/Linkedin';
import IconWhatsapp from '../../assets/Contact/Whatsapp';
import BodySvg from '../../assets/SVGBody/Svg3';

const Contact = () => {
  const contactData = [
    {
      id: 1,
      icon: <IconEmail />,
      title: 'E-mail',
      content: 'anabenjamin.dev@gmail.com',
      href: 'mailto:anabenjamin.dev@gmail.com',
    },
    {
      id: 2,
      icon: <IconGithub />,
      title: 'GitHub',
      content: '@anapaulabenjamin',
      href: 'https://github.com/anapaulabenjamin',
    },
    {
      id: 3,
      icon: <IconLinkedin />,
      title: 'Linkedin',
      content: '@anapaulabenjamin',
      href: 'https://www.linkedin.com/in/ana-paula-benjamin/',
    },
    {
      id: 4,
      icon: <IconWhatsapp />,
      title: 'Whatsapp',
      content: '55 (47) 99723-3267',
      href: 'https://wa.me/5547997233267',
    },
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const trail = useTrail(contactData.length, {
    opacity: inView ? 1 : 0,
    transform: inView ? 'scale(1)' : 'scale(0.4)',
    config: { duration: 600 },
  });

  return (
    <section id="contato" className="background">
      <div ref={ref} className={`${Styles.contact} container`}>
        <BodySvg />
        <h2 className="title paddingTitle animeLeft">
          contato<span className="gradient">.</span>
        </h2>
        <h3 className="subTitle animeLeft">como me encontrar</h3>
        <div className={Styles.contactList}>
          {trail.map((style, index) => (
            <animated.div style={style} key={contactData[index].id}>
              <ContactItem
                href={contactData[index].href}
                icon={contactData[index].icon}
                title={contactData[index].title}
                content={contactData[index].content}
              />
            </animated.div>
          ))}
        </div>
        <p className={`${Styles.contactMe} animeRight`}>
          Se você está interessado em meu trabalho, deseja discutir
          oportunidades de colaboração ou simplesmente deseja trocar ideias, não
          hesite em entrar em contato. Estou sempre aberta a novas conexões e
          oportunidades emocionantes.
        </p>
      </div>
    </section>
  );
};

export default Contact;
