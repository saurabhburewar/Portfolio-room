import './skills.css';
import React, { Component } from 'react';
import pythonImg from '../../static/skills/python-01.png';
import cImg from '../../static/skills/C.png';
import cppImg from '../../static/skills/Cpp.png';
import jsImg from '../../static/skills/js-01.png';
import javaImg from '../../static/skills/java-01.png';
import scalaImg from '../../static/skills/scala.svg';
import tfImg from '../../static/skills/tf-01.png';
import ptImg from '../../static/skills/pytorch-01.png';
import scikitImg from '../../static/skills/scikit-01.png';
import hadoopImg from '../../static/skills/hadoop-01.png';
import hiveImg from '../../static/skills/hive-01.png';
import sparkImg from '../../static/skills/spark.png';
import sqoopImg from '../../static/skills/sqoop.png';
import phoenixImg from '../../static/skills/phoenix-01.png';
import htmlImg from '../../static/skills/html.svg';
import cssImg from '../../static/skills/CSS.png';
import reactImg from '../../static/skills/React.png';
import nodeImg from '../../static/skills/node.png';
import controlImg from '../../static/skills/control.png';
import zenaImg from '../../static/skills/zena-01.png';
import sketchImg from '../../static/skills/sketch.png';
import psImg from '../../static/skills/ps.png';
import aiImg from '../../static/skills/ai.png';

export default function Skills() {
    return (
        <div className='skillsPage'>
            <div className='Mlsection'>
                <div className='MLBox'>
                    <div className='MLHead'>ML & Big Data</div>
                    <div className='MLList'>
                        <div className='MLItem'>
                            <div className='MLImg'>
                                <img src={tfImg}></img>
                            </div>
                            <div className='MLText'>TensorFlow</div>
                        </div>
                        <div className='MLItem'>
                            <div className='MLImg'>
                                <img src={ptImg}></img>
                            </div>
                            <div className='MLText'>PyTorch</div>
                        </div>
                        <div className='MLItem'>
                            <div className='MLImg'>
                                <img src={scikitImg}></img>
                            </div>
                            <div className='MLText'>Scikit</div>
                        </div>
                        <div className='MLItem'>
                            <div className='MLImg'></div>
                            <div className='MLText'></div>
                        </div>
                        <div className='MLItem'>
                            <div className='MLImg'></div>
                            <div className='MLText'></div>
                        </div>
                        <div className='MLItem'>
                            <div className='MLImg'>
                                <img src={hadoopImg}></img>
                            </div>
                            <div className='MLText'>Hadoop</div>
                        </div>
                        <div className='MLItem'>
                            <div className='MLImg'>
                                <img src={hiveImg}></img>
                            </div>
                            <div className='MLText'>Hive</div>
                        </div>
                        <div className='MLItem'>
                            <div className='MLImg'>
                                <img src={sparkImg}></img>
                            </div>
                            <div className='MLText'>Spark</div>
                        </div>
                        <div className='MLItem'>
                            <div className='MLImg'>
                                <img src={sqoopImg}></img>
                            </div>
                            <div className='MLText'>Sqoop</div>
                        </div>
                        <div className='MLItem'>
                            <div className='MLImg'>
                                <img src={phoenixImg}></img>
                            </div>
                            <div className='MLText'>Phoenix</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Websection'>
                <div className='WebBox'>
                    <div className='MLHead'>Web Development</div>
                    <div className='MLList'>
                        <div className='WebItem'>
                            <div className='WebImg'>
                                <img src={htmlImg}></img>
                            </div>
                            <div className='MLText'>HTML</div>
                        </div>
                        <div className='WebItem'>
                            <div className='WebImg'>
                                <img src={cssImg}></img>
                            </div>
                            <div className='MLText'>CSS</div>
                        </div>
                        <div className='WebItem'>
                            <div className='WebImg'>
                                <img src={reactImg}></img>
                            </div>
                            <div className='MLText'>React</div>
                        </div>
                        <div className='WebItem'>
                            <div className='WebImg'>
                                <img style={{width: '60%'}} src={nodeImg}></img>
                            </div>
                            <div className='MLText'>Nodejs</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Otherssection'>
                <div className='WebBox'>
                    <div className='MLHead'>Others</div>
                    <div className='MLList'>
                        <div className='OthersItem'>
                            <div className='WebImg'>
                                <img style={{width: '100%'}} src={controlImg}></img>
                            </div>
                            <div className='MLText'>Control-M</div>
                        </div>
                        <div className='OthersItem'>
                            <div className='WebImg'>
                                <img style={{width: '60%'}} src={zenaImg}></img>
                            </div>
                            <div className='MLText'>ASG-Zena</div>
                        </div>
                        <div className='OthersItem'>
                            <div className='WebImg'></div>
                            <div className='MLText'></div>
                        </div>
                        <div className='OthersItem'>
                            <div className='WebImg'>
                                <img src={sketchImg}></img>
                            </div>
                            <div className='MLText'>Sketch</div>
                        </div>
                        <div className='OthersItem'>
                            <div className='WebImg'>
                                <img src={psImg}></img>
                            </div>
                            <div className='MLText'>Photoshop</div>
                        </div>
                        <div className='OthersItem'>
                            <div className='WebImg'>
                                <img src={aiImg}></img>
                            </div>
                            <div className='MLText'>Illustrator</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Langsection'>
                <div className='LangBox'>
                    <div className='LangHead'>Languages</div>
                    <div className='LangList'>
                        <div className='LangItem'>
                            <div className='LangImg'>
                                <img src={pythonImg}></img>
                            </div>
                            <div className='LangText'>Python</div>
                        </div>
                        <div className='LangItem'>
                            <div className='LangImg'>
                                <img src={cImg}></img>
                            </div>
                            <div className='LangText'>C</div>
                        </div>
                        <div className='LangItem'>
                            <div className='LangImg'>
                                <img src={cppImg}></img>
                            </div>
                            <div className='LangText'>C++</div>
                        </div>
                        <div className='LangItem'>
                            <div className='LangImg'>
                                <img src={jsImg}></img>
                            </div>
                            <div className='LangText'>Javascript</div>
                        </div>
                        <div className='LangItem'>
                            <div className='LangImg'>
                                <img src={javaImg}></img>
                            </div>
                            <div className='LangText'>Java</div>
                        </div>
                        <div className='LangItem'>
                            <div className='LangImg'>
                                <img src={scalaImg}></img>
                            </div>
                            <div className='LangText'>Scala</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}