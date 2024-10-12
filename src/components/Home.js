import { Hero, Button, InlineLink } from '@algolia/ui-library';
import { useColorMode } from '@docusaurus/theme-common';
import { useBaseUrlUtils } from '@docusaurus/useBaseUrl';
import React from 'react';

import DocSearchLogo from './DocSearchLogo';
import showcaseProjects from './showcase-projects.json';

function Home() {
  const { withBaseUrl } = useBaseUrlUtils();
  const { colorMode } = useColorMode();

  React.useEffect(() => {
    if (colorMode === 'dark') {
      document.querySelector('html').classList.add('dark');
    } else {
      document.querySelector('html').classList.remove('dark');
    }
  }, [colorMode]);

  function Header() {
    return (
      <Hero
        id="hero"
        title={
          <>
            <span className="text-3xl leading-12 font-extrabold md:text-4xl md:leading-10">
            Spader AI
            </span>
            <span className="hero-title text-3xl leading-9 font-extrabold md:text-3xl lg:text-3xl md:leading-10 max-w-ls inline-block">
            加速您的 AI 开发和部署
            </span>
          </>
        }
        background="curves"
        cta={[
          <Button
            key="get-started"
            href={withBaseUrl('docs/what-is-docsearch')}
          >
            Get started
          </Button>,
          <Button
            key="contact"
            href={withBaseUrl('contact')}
            background="blue"
            color="white"
            className="apply-button"
          >
            Contact
          </Button>,
        ]}
      />
    );
  }

  function Description() {
    return (
      <>
        {/* Showcase */}
        <div className="py-16 overflow-hidden">
          <div className="relative max-w-xl mx-auto px-4 md:px-6 lg:px-8 lg:max-w-screen-xl">
            <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl leading-9 font-extrabold md:text-4xl md:leading-10">
                平台性能
                </h2>
              </div>
            </div>
            <div className="pt-4 pb-12 md:pb-16">
              <div className="relative">
                <div className="relative max-w-screen-xl mx-auto px-4 lg:px-6">
                  <div className="max-w-4xl mx-auto">
                    <dl className="rounded-lg shadow-xl lg:grid lg:grid-cols-3 showcase">
                      <div className="flex flex-col border-b p-6 text-center lg:border-0 showcase-border">
                        <dt
                          className="order-2 mt-2 text-lg leading-6 font-medium text-description"
                          id="item-1"
                        >
                          支持的开源模型
                        </dt>
                        <dd
                          className="order-1 text-5xl leading-none font-extrabold text-spader"
                          aria-describedby="item-1"
                        >
                          100+
                        </dd>
                      </div>
                      <div className="flex flex-col border-t border-b p-6 text-center lg:border-0 lg:border-l showcase-border">
                        <dt className="order-2 mt-2 text-lg leading-6 font-medium text-description">
                        推理速度提升
                        </dt>
                        <dd className="order-1 text-5xl leading-none font-extrabold text-spader">
                        10x
                        </dd>
                      </div>
                      <div className="flex flex-col border-t p-6 text-center lg:border-0 lg:border-l showcase-border">
                        <dt className="order-2 mt-2 text-lg leading-6 font-medium text-description">
                        服务可用性
                        </dt>
                        <dd className="order-1 text-5xl leading-none font-extrabold text-spader">
                        99.9%
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 grid grid-cols-4 gap-0.5 md:grid-cols-6 lg:mt-0 lg:grid-cols-8">
              {showcaseProjects
                .sort((a, b) => {
                  return a.name.localeCompare(b.name);
                })
                .map(({ name, href, image }) => (
                  <div
                    key={href}
                    className="col-span-1 flex justify-center py-2 px-2 text-center"
                  >
                    <a
                      href={href}
                      rel="noreferrer"
                      target="_blank"
                      alt={`Discover DocSearch on the ${name} documentation`}
                    >
                      <img
                        className="inline-block h-10 w-10"
                        src={withBaseUrl(image)}
                        alt={`Discover DocSearch on the ${name} documentation`}
                      />
                      <div className="text-description uppercase text-xs py-2 font-semibold">
                        {name}
                      </div>
                    </a>
                  </div>
                ))}
            </div>
          </div>
        </div>

        

        {/* Anatomy of DocSearch */}
        <div className="py-16 overflow-hidden lg:py-24">
          <div className="relative max-w-xl mx-auto px-4 md:px-6 lg:px-8 lg:max-w-screen-xl">
            <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div className="relative">
                <h4 className="text-2xl leading-8 font-extrabold tracking-tight md:text-3xl md:leading-9">
                我们的产品
                </h4>
                <p className="mt-3 text-lg leading-7 text-description">
                 
                </p>

                <ul className="mt-10">
                  <li>
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-spader text-white">
                          <svg
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="sparkles w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h5 className="text-lg leading-6 font-medium">
                        Spader Inference
                        </h5>
                        <p className="mt-2 text-base leading-6 text-description">
                        100+ 开源模型的推理服务
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="mt-10">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-spader text-white">
                          <svg
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="menu-alt2 w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M4 6h16M4 12h16M4 18h7"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h5 className="text-lg leading-6 font-medium">
                        Spader Fine-tuning
                        </h5>
                        <p className="mt-2 text-base leading-6 text-description">
                        使用自己的数据微调领先模型
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mt-10 -mx-4 lg:mt-0 uil-ta-center">
                <img
                  className="relative mx-auto rounded-lg shadow-lg image-rendering-crisp"
                  src={withBaseUrl(
                    `img/assets/${
                      colorMode === 'dark'
                        ? 'placeholder'
                        : 'placeholder'
                    }.svg`
                  )}
                  alt="docsearch-modal"
                />
              </div>
            </div>

            <div className="relative mt-12 md:mt-16 lg:mt-24">
              <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
                <div className="lg:col-start-2">
                  <ul className="mt-10">
                    <li>
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-spader text-white">
                            <svg
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              className="lightning-bolt w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 10V3L4 14h7v7l9-11h-7z"
                              ></path>
                            </svg>
                          </div>
                        </div>
                        <div className="ml-4">
                          <h5 className="text-lg leading-6 font-medium">
                          Spader GPU Clusters
                          </h5>
                          <p className="mt-2 text-base leading-6 text-description">
                          私有 GPU 集群用于大规模训练
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="mt-10">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-spader text-white">
                            <svg
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              className="arrows-expand w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                              ></path>
                            </svg>
                          </div>
                        </div>
                        <div className="ml-4">
                          <h5 className="text-lg leading-6 font-medium">
                          Spader Custom Models
                          </h5>
                          <p className="mt-2 text-base leading-6 text-description">
                          从头开始训练前沿模型
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="mt-10 -mx-4 lg:mt-0 lg:col-start-1 uil-ta-center">
                  <img
                    className="relative mx-auto"
                    width="490"
                    src={withBaseUrl('img/assets/placeholder.svg')}
                    alt="anatomy-of-docsearch"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <div id="tailwind">
      <Header />
      <Description />
    </div>
  );
}

export default Home;
