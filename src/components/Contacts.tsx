'use client'

import { useState } from 'react'

type FormState = 'idle' | 'loading' | 'success' | 'error'

const Contacts = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<FormState>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      })

      const data = await res.json()

      if (!res.ok) {
        console.log(res)
        setErrorMsg(data.error ?? '오류가 발생했습니다.')
        setStatus('error')
        return
      }

      setStatus('success')
      setName('')
      setEmail('')
      setMessage('')
    } catch (e) {
      console.log(e)
      setErrorMsg('네트워크 오류가 발생했습니다. 잠시 후 다시 시도해주세요.')
      setStatus('error')
    }
  }

  const inputClass =
    'w-full rounded-md border border-[var(--line)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--foreground)] placeholder:text-[var(--muted)] outline-none transition focus:border-[var(--accent-strong)] focus:ring-1 focus:ring-[var(--accent-strong)]'

  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-20 sm:px-6">
      <h2 className="mb-8 flex items-center gap-3 text-3xl font-black text-[var(--foreground)]">
        <span className="h-px w-8 bg-[var(--accent)]" />
        Contact
      </h2>

      <div className="rounded-lg border border-[var(--accent-border)] bg-[var(--surface-muted)] p-6 shadow-[var(--shadow-soft)] sm:p-8">
        <div className="mb-8">
          <p className="text-sm font-bold text-[var(--accent)]">Let's build something useful</p>
          <p className="mt-4 max-w-2xl text-2xl font-black leading-snug text-[var(--foreground)] sm:text-3xl">
            새로운 프로젝트와 협업 기회에 관심이 있습니다.
          </p>
          <p className="mt-4 leading-8 text-[var(--muted)]">
            프론트엔드 개발, 백엔드 개발, 프로젝트 협업 관련해 아래 양식으로 편하게 연락 부탁드립니다.
          </p>
        </div>

        {status === 'success' ? (
          <div className="rounded-md border border-[var(--accent-border)] bg-[var(--surface)] px-6 py-10 text-center">
            <p className="text-lg font-bold text-[var(--foreground)]">메시지가 전송되었습니다.</p>
            <p className="mt-2 text-sm text-[var(--muted)]">빠른 시일 내에 답변 드리겠습니다.</p>
            <button
              onClick={() => setStatus('idle')}
              className="mt-6 rounded-md border border-[var(--line)] px-5 py-2 text-sm font-semibold text-[var(--muted)] transition hover:border-[var(--accent-strong)] hover:text-[var(--foreground)]"
            >
              다시 보내기
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="grid gap-1.5">
                <label htmlFor="contact-name" className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">
                  이름
                </label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="홍길동"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className={inputClass}
                />
              </div>
              <div className="grid gap-1.5">
                <label htmlFor="contact-email" className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">
                  이메일
                </label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="example@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className={inputClass}
                />
              </div>
            </div>

            <div className="grid gap-1.5">
              <label htmlFor="contact-message" className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">
                메시지
              </label>
              <textarea
                id="contact-message"
                rows={5}
                placeholder="안녕하세요, 협업 관련해 문의드립니다..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className={`${inputClass} resize-none`}
              />
            </div>

            {status === 'error' && (
              <p className="text-sm text-red-400">{errorMsg}</p>
            )}

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-[var(--muted)]">
                &nbsp;
              </p>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-[var(--accent-strong)] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-[var(--accent-strong)]/20 transition hover:bg-[var(--accent)] disabled:opacity-60 disabled:cursor-not-allowed sm:w-auto sm:shrink-0"
              >
                {status === 'loading' ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    전송 중...
                  </>
                ) : (
                  '이메일 보내기'
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}

export default Contacts
