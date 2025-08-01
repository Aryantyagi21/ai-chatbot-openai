# Error Screenshots

This folder contains common error screenshots encountered during development or deployment.

---

### 1. Undefined or Blank Response Error

![Undefined Response](./undefined_response.png)

**Possible Cause:**
- OpenAI API returned an empty string.
- Frontend is not handling `.textContent` or `.innerHTML` correctly.

**Fix:**
- Validate `responseText` before rendering it to DOM.
- Add a fallback message like `"Sorry, I couldn't understand that."`

---

### 2. Error 429 - Too Many Requests / Quota Exceeded

![Error 429](./error429_quota.png)

**Possible Cause:**
- Free-tier OpenAI credits exhausted.
- Sending too many requests in a short time.

**Fix:**
- Check OpenAI usage: [https://platform.openai.com/account/usage](https://platform.openai.com/account/usage)
- If exhausted, add billing info or upgrade to a paid plan.
