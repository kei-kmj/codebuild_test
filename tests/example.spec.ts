import { test, expect } from '@playwright/test';

test.describe('アプリケーションの基本機能テスト', () => {
  test('ホームページが正しく表示される', async ({ page }) => {
    // ホームページへ移動
    await page.goto('/');
    
    // タイトルを確認
    await expect(page).toHaveTitle(/Vite \+ React \+ TS/);
    
    // ReactロゴとViteロゴが表示されていることを確認
    await expect(page.locator('img[alt="React logo"]')).toBeVisible();
    await expect(page.locator('img[alt="Vite logo"]')).toBeVisible();
  });

  test('カウンターが正しく機能する', async ({ page }) => {
    // ホームページへ移動
    await page.goto('/');
    
    // カウンターボタンの初期値を確認
    const countButton = page.locator('button', { hasText: 'count is' });
    await expect(countButton).toContainText('count is 0');
    
    // ボタンをクリックしてカウントが増加することを確認
    await countButton.click();
    await expect(countButton).toContainText('count is 1');
    
    // もう一度クリックしてカウントが増加することを確認
    await countButton.click();
    await expect(countButton).toContainText('count is 2');
  });
});
