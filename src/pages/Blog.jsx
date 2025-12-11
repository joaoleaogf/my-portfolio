import React, { useEffect, useState } from 'react';
import { getLatestArticles } from '../services/blogService';
import Reveal from '../components/common/Reveal';
import SEO from '../components/common/SEO';
import '../styles/Blog.css'; // We'll create this next

const Blog = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedArticle, setSelectedArticle] = useState(null);

    useEffect(() => {
        const fetchArticles = async () => {
            const data = await getLatestArticles();
            setArticles(data);
            setLoading(false);
        };
        fetchArticles();
    }, []);

    useEffect(() => {
        if (selectedArticle) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedArticle]);

    return (
        <section className="section blog-page">
            <SEO
                title="Blog | João Leão"
                description="Artigos e tutoriais sobre desenvolvimento web, ETL e Geoprocessamento."
            />

            {/* Modal Overlay */}
            {selectedArticle && (
                <div className="blog-modal-overlay" onClick={() => setSelectedArticle(null)}>
                    <div className="blog-modal-content" onClick={e => e.stopPropagation()}>
                        <button className="blog-modal-close" onClick={() => setSelectedArticle(null)}>
                            &times;
                        </button>

                        <div className="blog-modal-header">
                            {selectedArticle.cover_image && (
                                <img
                                    src={selectedArticle.cover_image}
                                    alt={selectedArticle.title}
                                    className="blog-modal-image"
                                />
                            )}
                            <div className="blog-modal-meta">
                                <span className="blog-date">
                                    {new Date(selectedArticle.published_at).toLocaleDateString('pt-BR')}
                                </span>
                                <span className="blog-reading-time">
                                    {selectedArticle.reading_time_minutes} min de leitura
                                </span>
                            </div>
                            <h2>{selectedArticle.title}</h2>
                        </div>

                        <div
                            className="blog-article-body"
                            dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
                        />
                    </div>
                </div>
            )}

            <div className="container">
                <Reveal width="100%">
                    <h2 className="section-title">Blog</h2>
                    <p className="section-subtitle">Compartilhando conhecimento e experiências</p>
                </Reveal>

                {loading ? (
                    <div className="loading-container">
                        <div className="loading-spinner"></div>
                    </div>
                ) : (
                    <div className="blog-grid">
                        {articles.map(article => (
                            <Reveal key={article.id} width="100%">
                                <article className="blog-card" onClick={() => setSelectedArticle(article)}>
                                    {article.cover_image && (
                                        <img
                                            src={article.cover_image}
                                            alt={article.title}
                                            className="blog-card-image"
                                        />
                                    )}
                                    <div className="blog-card-content">
                                        <div className="blog-card-header">
                                            <span className="blog-date">
                                                {new Date(article.published_at).toLocaleDateString('pt-BR')}
                                            </span>
                                            <span className="blog-reading-time">
                                                {article.reading_time_minutes} min de leitura
                                            </span>
                                        </div>
                                        <h3 className="blog-card-title">
                                            {article.title}
                                        </h3>
                                        <p className="blog-card-description">
                                            {article.description}
                                        </p>
                                        <div className="blog-card-tags">
                                            {article.tag_list.map(tag => (
                                                <span key={tag} className="blog-tag">#{tag}</span>
                                            ))}
                                        </div>
                                        <button
                                            className="read-more-link"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setSelectedArticle(article);
                                            }}
                                            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                                        >
                                            Ler mais →
                                        </button>
                                    </div>
                                </article>
                            </Reveal>
                        ))}
                    </div>
                )}

                {!loading && articles.length === 0 && (
                    <div className="no-articles">
                        <p>Nenhum artigo encontrado. Em breve novidades!</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Blog;
